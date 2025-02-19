import { useQuery } from '@tanstack/react-query';
import { cityService } from '../services/city.service';
import type { ICity } from '../types/city.types';
import { useEffect, useState } from 'react';

export function useSearch({ lat, lon }: ICity) {
  const { data } = useQuery({
    queryKey: ['city-item'],
    queryFn: () => cityService.getByData(lat, lon),
    enabled: false,
  });

  const [city, setCity] = useState(data?.data);

  useEffect(() => setCity(data?.data), [data]);

  return { city };
}
