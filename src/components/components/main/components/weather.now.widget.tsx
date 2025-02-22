import { WEATHER_ICON, WeatherKey } from '../../../../config/weather.config';
import { Icon } from '../../../ui/icon';
import { Loader } from '../../../ui/loader';
import { useGetWeatherAndForecast } from '../hooks/use.get.weather.and.forecast';

export function WeatherNowWidget() {
  const { weatherCity, isLoading } = useGetWeatherAndForecast();

  const weather = weatherCity?.weather[0]?.main as WeatherKey;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-6 bg-secondary rounded-2xl text-center grid gap-6'>
          <h3>{weatherCity?.name}</h3>
          <div className='grid grid-cols-2 items-center justify-center'>
            <div className='justify-self-center space-y-2'>
              <h4>Now</h4>
              <h2>{weatherCity?.main.temp.toFixed(0)}&deg;c</h2>
            </div>

            <div className='justify-self-center space-y-2'>
              <h4>{weather}</h4>
              <Icon
                Icon={WEATHER_ICON[weather]}
                size='50'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
