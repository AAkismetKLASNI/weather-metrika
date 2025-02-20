import { useAtomValue } from 'jotai';
import { WeatherForecastWidget } from './components/weather.forecast.widget';
import { WeatherNowWidget } from './components/weather.now.widget';
import { searchCityAtom } from '../../../store/search.city.atom';
import { WeatherAdditionalInfoWidget } from './components/weather.additional.info/weather.additional.info.widget.widget';

export function Main() {
  const searchCity = useAtomValue(searchCityAtom);

  return (
    <main className='grid grid-cols-4 gap-16'>
      {searchCity ? (
        <>
          <WeatherNowWidget />
          <WeatherForecastWidget />
          <WeatherAdditionalInfoWidget />
        </>
      ) : (
        <h1>No metrika</h1>
      )}
    </main>
  );
}
