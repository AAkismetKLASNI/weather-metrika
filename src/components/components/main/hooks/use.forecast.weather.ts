import { useQuery, useQueryClient } from '@tanstack/react-query';
import { cityService } from '../../../../services/city.service';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { geoLocationAtom } from '../../../../store/geo.location';

export function useGetForecastWeather() {
  const geoLocation = useAtomValue(geoLocationAtom);

  const uniqieForecastDays: number[] = [];

  const queryClient = useQueryClient();

  const {
    data: fiveDayForecast,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ['forecast-weather'],
    queryFn: async () => {
      const data = await cityService.getForecastByGet(geoLocation.lat, geoLocation.lon);

      return data?.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDay();
        const currentDate = new Date().getDay();

        if (!uniqieForecastDays.includes(forecastDate) && forecastDate !== currentDate) {
          return uniqieForecastDays.push(forecastDate);
        }
      });
    },
    enabled: !!geoLocation,
  });

  useEffect(() => {
    if (geoLocation) {
      queryClient.refetchQueries({ queryKey: ['forecast-weather'] });
    }
  }, [queryClient, geoLocation]);

  return { fiveDayForecast, isLoading, isRefetching };
}
