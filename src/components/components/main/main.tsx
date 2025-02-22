import { useAtomValue } from 'jotai';
import { WeatherForecastWidget } from './components/weather.forecast.widget';
import { WeatherNowWidget } from './components/weather.now.widget';
import { WeatherAdditionalInfoWidget } from './components/weather.additional.info/weather.additional.info.widget.widget';
import { ChartWidget } from './components/chart.widget';
import { geoLocationAtom } from '../../../store/geo.location';
import { Icon } from '../../ui/icon';
import { LocateOff } from 'lucide-react';

export function Main() {
  const geoLocation = useAtomValue(geoLocationAtom);

  return (
    <>
      {geoLocation ? (
        <main className='grid gap-8 lg:grid-cols-3 xl:grid-cols-4 lg:grid-rows-2 lg:gap-16'>
          <WeatherNowWidget />
          <WeatherForecastWidget />
          <WeatherAdditionalInfoWidget />
          <ChartWidget />
        </main>
      ) : (
        <main className='flex flex-col gap-4 items-center text-[#222]'>
          <Icon
            Icon={LocateOff}
            size='90'
          />
          <h3 className='font-bold'>No metrika</h3>
        </main>
      )}
    </>
  );
}
