import { useQuery, useQueryClient } from '@tanstack/react-query';
import { cityService } from '../../../../services/city.service';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { searchCityAtom } from '../../../../store/search.city.atom';

export function useGetWeatherCity() {
  const searchCity = useAtomValue(searchCityAtom);

  const queryClient = useQueryClient();

  const {
    data: weatherCity,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ['weather-city'],
    queryFn: async () => cityService.getWeatherByGeo(searchCity.lat, searchCity.lon),
    enabled: !!searchCity,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (searchCity) {
      queryClient.refetchQueries({ queryKey: ['weather-city'] });
    }
  }, [queryClient, searchCity]);

  return { weatherCity, isLoading, isRefetching };
}
