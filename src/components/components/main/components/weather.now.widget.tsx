import { WEATHER_ICON } from '../../../../config/weather.config';
import { useGetWeatherCity } from '../hooks/use.get.weather.city';
import { Icon } from '../../../ui/icon';
import { Loader } from '../../../ui/loader';

export function WeatherNowWidget() {
  const { weatherCity, isLoading } = useGetWeatherCity();

  const weather = weatherCity?.weather[0]?.main;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-4 bg-secondary rounded-2xl grid text-center grid-rows-2 gap-4 row-span-1'>
          <div className='space-y-2 justify-self-center'>
            <h4>Now</h4>
            <h2>{weatherCity?.main.temp.toFixed(0)}&deg;c</h2>
          </div>
          <div className='space-y-2 justify-self-center'>
            <h4>{weather}</h4>

            <Icon
              Icon={WEATHER_ICON[weather]}
              size='50'
            />
          </div>
        </div>
      )}
    </>
  );
}
