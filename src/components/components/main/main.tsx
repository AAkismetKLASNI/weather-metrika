import { useAtomValue } from 'jotai';
import { WeatherForecastWidget } from './components/weather.forecast.widget';
import { WeatherNowWidget } from './components/weather.now.widget';
import { searchCityAtom } from '../../../store/search.city.atom';

export function Main() {
  const searchCity = useAtomValue(searchCityAtom);

  return (
    <main className='grid grid-cols-4 gap-16'>
      {searchCity ? (
        <>
          <WeatherNowWidget />
          <WeatherForecastWidget />
        </>
      ) : (
        <h1>No metrika</h1>
      )}
    </main>
  );
}
