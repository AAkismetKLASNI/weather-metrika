import { Field } from '../../ui/field';
import { Logo } from './components/logo';
import { useDebounce } from '../../../hooks/use.debounce';
import { useGetCitiesList } from '../../../hooks/use.get.cities.list';
import { Badge } from '../../ui/badge';
import { useSetAtom } from 'jotai';
import { searchCityAtom } from '../../../store/search.city.atom';

export function Header() {
  const { cities, setIsSearch, setSearchTerm, searchTerm } = useGetCitiesList();

  const setSearchCity = useSetAtom(searchCityAtom);

  const debounce = useDebounce(() => setIsSearch(true), 400);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    debounce();
  };

  return (
    <header className='mt-4 grid grid-cols-[_1fr_10fr] gap-6 w-full relative'>
      <Logo />
      <div className='space-y-2 flex items-center py-4 px-10 bg-secondary rounded-full'>
        <Field
          value={searchTerm}
          onChange={handleOnChange}
          type='text'
          placeholder='Add city..'
        />
      </div>

      {!!cities?.length && (
        <div className='row-start-2 col-start-2 flex gap-2 flex-wrap absolute top-[calc(100%+1rem)]'>
          {cities.map((city, index) => (
            <Badge
              onClick={() => setSearchCity(city)}
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
