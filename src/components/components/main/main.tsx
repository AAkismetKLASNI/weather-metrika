import { useAtomValue } from 'jotai';
import { WeatherForecastWidget } from './components/weather.forecast.widget';
import { WeatherNowWidget } from './components/weather.now.widget';
import { WeatherAdditionalInfoWidget } from './components/weather.additional.info/weather.additional.info.widget.widget';
import { ChartWidget } from './components/chart.widget';
import { geoLocationAtom } from '../../../store/geo.location';
import { EmojiWidget } from './components/emoji.widget';

export function Main() {
  const geoLocation = useAtomValue(geoLocationAtom);

  return (
    <main className='grid grid-cols-4 grid-rows-2 gap-16'>
      {geoLocation ? (
        <>
          <WeatherNowWidget />
          <WeatherForecastWidget />
          <WeatherAdditionalInfoWidget />
          <ChartWidget />
          <EmojiWidget />
        </>
      ) : (
        <h1>No metrika</h1>
      )}
    </main>
  );
}
