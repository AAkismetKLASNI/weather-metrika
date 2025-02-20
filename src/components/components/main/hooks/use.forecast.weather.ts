import { useQuery, useQueryClient } from '@tanstack/react-query';
import { cityService } from '../../../../services/city.service';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { searchCityAtom } from '../../../../store/search.city.atom';

export function useGetForecastWeather() {
  const searchCity = useAtomValue(searchCityAtom);

  const uniqieForecastDays: number[] = [];

  const queryClient = useQueryClient();

  const {
    data: fiveDayForecast,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ['forecast-weather'],
    queryFn: async () => {
      const data = await cityService.getForecastByGet(searchCity.lat, searchCity.lon);

      return data?.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDay();
        const currentDate = new Date().getDay();

        if (!uniqieForecastDays.includes(forecastDate) && forecastDate !== currentDate) {
          return uniqieForecastDays.push(forecastDate);
        }
      });
    },
    enabled: !!searchCity,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (searchCity) {
      queryClient.refetchQueries({ queryKey: ['forecast-weather'] });
    }
  }, [queryClient, searchCity]);

  return { fiveDayForecast, isLoading, isRefetching };
}
