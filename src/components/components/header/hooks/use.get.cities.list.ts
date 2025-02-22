import { useQuery } from '@tanstack/react-query';
import { cityService } from '../../../../services/city.service';
import { useEffect, useState } from 'react';
import { useGeoHandlers } from './use.geo.handlers';

export function useGetCitiesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const limit = '5';

  const { getGeo } = useGeoHandlers();

  const { data } = useQuery({
    queryKey: ['cities-list'],
    queryFn: () => cityService.getCities(searchTerm, limit),
    enabled: !!searchTerm && isSearch,
  });

  const [cities, setCities] = useState(data?.data);

  useEffect(() => {
    const width = window.innerWidth;

    if (width < 1024 && data?.data[0]?.lat) {
      getGeo(data?.data[0].lat, data?.data[0].lon);
      setIsSearch(false);
      return;
    }

    setCities(data?.data);
    setIsSearch(false);
  }, [data, getGeo]);

  return { cities, setIsSearch, setSearchTerm, searchTerm };
}
