import { useQuery, useQueryClient } from '@tanstack/react-query';
import { cityService } from '../../../../services/city.service';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { geoLocationAtom } from '../../../../store/geo.location';

export function useGetWeatherCity() {
  const geoLocation = useAtomValue(geoLocationAtom);

  const queryClient = useQueryClient();

  const {
    data: weatherCity,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ['weather-city'],
    queryFn: async () => cityService.getWeatherByGeo(geoLocation.lat, geoLocation.lon),
    enabled: !!geoLocation,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (geoLocation) {
      queryClient.refetchQueries({ queryKey: ['weather-city'] });
    }
  }, [queryClient, geoLocation]);

  return { weatherCity, isLoading, isRefetching };
}
