import { WEATHER_ICON } from '../../../../config/weather.config';
import { useGetWeatherCity } from '../../../../hooks/use.get.weather.city';
import { Icon } from '../../../ui/icon';
import { Loader } from '../../../ui/loader';

export function WeaherNowWidget() {
  const { weatherCity, isLoading } = useGetWeatherCity();

  const weather = weatherCity?.weather[0].main;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-4 bg-secondary rounded-2xl grid justify-center text-center grid-rows-2 gap-4'>
          <div className='space-y-2'>
            <div>Now</div>
            <h2>{weatherCity?.main.temp.toFixed(0)}&deg;c</h2>
          </div>
          <div className='space-y-2'>
            <div>{weather}</div>

            <Icon
              extra='mx-auto'
              Icon={WEATHER_ICON[weather]}
              size='50'
            />
          </div>
        </div>
      )}
    </>
  );
}
