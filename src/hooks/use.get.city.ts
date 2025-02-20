import { useQuery } from '@tanstack/react-query';
import { cityService } from '../services/city.service';
import type { ICity } from '../types/city.types';
import { useEffect, useState } from 'react';

export function useGetCity() {
  const [searchCity, setSearchCity] = useState<ICity>();

  const { data } = useQuery({
    queryKey: ['city-item'],
    queryFn: () => cityService.getByData(searchCity.lat, searchCity.lon),
    enabled: !!searchCity?.lat && !!searchCity.lon,
    refetchOnMount: false,
  });

  const [city, setCity] = useState(data);

  useEffect(() => {
    setCity(data);
  }, [data]);

  return { city, setSearchCity };
}
