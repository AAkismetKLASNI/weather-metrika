import { Logo } from './components/logo';
import { useGetCitiesList } from './hooks/use.get.cities.list';
import { Badge } from '../../ui/badge';
import { GetGeoButton } from './components/get.geo.button';
import { useGeoHandlers } from './hooks/use.geo.handlers';
import { LogoMobile } from './components/logo.mobile';
import { SearchField } from './components/search.field';

export function Header() {
  const { cities } = useGetCitiesList();
  const { getGeo } = useGeoHandlers();

  return (
    <header className='mt-10 grid grid-cols-[_3fr_0.7fr] md:grid-cols-[_1fr_8fr_0.7fr] gap-3 lg:mt-6 lg:gap-6 w-full relative'>
      <Logo />

      <LogoMobile />

      <SearchField />

      <GetGeoButton />

      {!!cities?.length && (
        <div className='flex gap-4 flex-wrap absolute top-[calc(100%+1rem)] md:row-start-2 md:col-start-2 '>
          {cities.map((city, index) => (
            <Badge
              onClick={() => getGeo(city.lat, city.lon)}
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
