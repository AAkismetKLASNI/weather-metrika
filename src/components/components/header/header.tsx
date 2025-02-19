import { Field } from '../../ui/field';
import { Logo } from './components/logo';
import { useDebounce } from '../../../hooks/use.debounce';
import { useGetCitiesList } from '../../../hooks/use.get.cities.list';
import { Badge } from '../../ui/badge';

export function Header() {
  const { cities, setIsSearch, setSearchTerm, searchTerm } = useGetCitiesList();

  const debounce = useDebounce(() => {
    setIsSearch(true);
  }, 400);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);

    debounce();
  };

  return (
    <header className='p-4 mt-4 grid grid-cols-2 gap-6 w-full'>
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
        <div className='row-start-2 col-start-2 flex gap-2 flex-wrap'>
          {cities.map(({ name, country }, index) => (
            <Badge key={index}>
              {name} - {country}
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
}
