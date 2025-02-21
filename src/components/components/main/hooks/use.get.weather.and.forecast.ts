import { useQueries, useQueryClient } from '@tanstack/react-query';
import { cityService } from '../../../../services/city.service';
import { useAtomValue } from 'jotai';
import { geoLocationAtom } from '../../../../store/geo.location';
import { useEffect } from 'react';

export function useGetWeatherAndForecast() {
  const uniqieForecastDays: number[] = [];

  const queryClient = useQueryClient();

  const geoLocation = useAtomValue(geoLocationAtom);

  const [fiveDayForecast, weatherCity] = useQueries({
    queries: [
      {
        queryKey: ['forecast-weather'],
        queryFn: async () => {
          if (!geoLocation) return;

          const data = await cityService.getForecastByGet(
            geoLocation.lat,
            geoLocation.lon
          );

          return data?.list.filter((forecast) => {
            const forecastDate = new Date(forecast.dt_txt).getDay();
            const currentDate = new Date().getDay();

            if (
              !uniqieForecastDays.includes(forecastDate) &&
              forecastDate !== currentDate
            ) {
              return uniqieForecastDays.push(forecastDate);
            }
          });
        },
        enabled: !!geoLocation,
      },
      {
        queryKey: ['weather-city'],
        queryFn: async () => {
          if (!geoLocation) return;

          return cityService.getWeatherByGeo(geoLocation.lat, geoLocation.lon);
        },
        enabled: !!geoLocation,
      },
    ],
  });

  const isLoading = fiveDayForecast.isLoading || weatherCity.isLoading;

  useEffect(() => {
    if (geoLocation) {
      queryClient.refetchQueries({ queryKey: ['weather-city'] });
      queryClient.refetchQueries({ queryKey: ['forecast-weather'] });
    }
  }, [queryClient, geoLocation]);

  return {
    fiveDayForecast: fiveDayForecast.data,
    weatherCity: weatherCity.data,
    isLoading,
  };
}
