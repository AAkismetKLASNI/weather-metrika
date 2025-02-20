import { useAtomValue } from 'jotai';
import { WeatherForecastWidget } from './components/weather.forecast.widget';
import { WeatherNowWidget } from './components/weather.now.widget';
import { WeatherAdditionalInfoWidget } from './components/weather.additional.info/weather.additional.info.widget.widget';
import { ChartWidget } from './components/chart.widget';
import { searchCityAtom } from '../../../store/search.city.atom';

export function Main() {
  const searchCity = useAtomValue(searchCityAtom);

  return (
    <main className='grid grid-cols-4 grid-rows-2 gap-16'>
      {searchCity ? (
        <>
          <WeatherNowWidget />
          <WeatherForecastWidget />
          <WeatherAdditionalInfoWidget />
          <ChartWidget />
        </>
      ) : (
        <h1>No metrika</h1>
      )}
    </main>
  );
}
