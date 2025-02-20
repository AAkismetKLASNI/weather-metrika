import { useQuery } from '@tanstack/react-query';
import { cityService } from '../services/city.service';
import { useEffect, useState } from 'react';

export function useGetCitiesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const limit = '5';

  // fix: зафиксить все запросы в параметрами
  const { data } = useQuery({
    queryKey: ['cities-list'],
    queryFn: () => cityService.getCities(searchTerm, limit),
    enabled: !!searchTerm && isSearch,
  });

  const [cities, setCities] = useState(data?.data);

  useEffect(() => {
    setCities(data?.data);
    setIsSearch(false);
  }, [data]);

  return { cities, setIsSearch, setSearchTerm, searchTerm };
}
