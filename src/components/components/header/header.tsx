import { Field } from '../../ui/field';
import { Logo } from './components/logo';
import { useDebounce } from '../../../hooks/use.debounce';
import { useGetCitiesList } from '../../../hooks/use.get.cities.list';
import { Badge } from '../../ui/badge';
import { useSetAtom } from 'jotai';
import { geoLocationAtom } from '../../../store/geo.location';
import { GetGeoButton } from './components/get.geo.button';

export function Header() {
  const { cities, setIsSearch, setSearchTerm, searchTerm } = useGetCitiesList();

  const debounce = useDebounce(() => setIsSearch(true), 400);

  const setGeoLocation = useSetAtom(geoLocationAtom);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    debounce();
  };

  return (
    <header className='mt-6 grid grid-cols-[_1fr_10fr_0.6fr] gap-6 w-full relative'>
      <Logo />

      <div className='space-y-2 flex items-center py-4 px-10 bg-secondary rounded-full'>
        <Field
          value={searchTerm}
          onChange={handleOnChange}
          type='text'
          placeholder='Add city..'
        />
      </div>

      <GetGeoButton />

      {!!cities?.length && (
        <div className='row-start-2 col-start-2 flex gap-4 flex-wrap absolute top-[calc(100%+1rem)]'>
          {cities.map((city, index) => (
            <Badge
              onClick={() => setGeoLocation({ lat: city.lat, lon: city.lon })}
              key={index}
            >
              {city.name} - {city.country}
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
}
