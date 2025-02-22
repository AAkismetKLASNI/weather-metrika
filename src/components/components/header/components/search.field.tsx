import { useDebounce } from '../../../../hooks/use.debounce';
import { Field } from '../../../ui/field';
import { useGetCitiesList } from '../hooks/use.get.cities.list';

export function SearchField() {
  const { setIsSearch, setSearchTerm, searchTerm } = useGetCitiesList();

  const debounce = useDebounce(() => {
    setIsSearch(true);
  }, 400);

  return (
    <div className='space-y-2 flex items-center py-2 lg:py-4 px-6 lg:px-10 bg-secondary rounded-full '>
      <Field
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);

          debounce();
        }}
        type='text'
        placeholder='Add city..'
      />
    </div>
  );
}
