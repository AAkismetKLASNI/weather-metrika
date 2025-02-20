import { useQuery, useQueryClient } from '@tanstack/react-query';
import { cityService } from '../services/city.service';
import type { ICity } from '../types/city.types';
import { useEffect, useState } from 'react';

export function useGetWeatherCity() {
  const [searchCity, setSearchCity] = useState<ICity>();

  const queryClient = useQueryClient();

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['city-item'],
    queryFn: () => cityService.getWeatherByGeo(searchCity.lat, searchCity.lon),
    enabled: !!searchCity,
    refetchOnMount: false,
  });

  const [weatherCity, setWeatherCity] = useState(data);

  useEffect(() => {
    if (searchCity) {
      queryClient.refetchQueries({ queryKey: ['city-item'] });
    }
  }, [queryClient, searchCity]);

  useEffect(() => {
    console.log('weather', weatherCity);
    setWeatherCity(data);
  }, [data]);

  return { weatherCity, isLoading, isRefetching, setSearchCity };
}
