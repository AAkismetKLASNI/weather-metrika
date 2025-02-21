import { Loader } from '../../../ui/loader';
import { DAYS } from '../../../../config/days.config';
import { Icon } from '../../../ui/icon';
import { WEATHER_ICON, WeatherKey } from '../../../../config/weather.config';
import { useGetWeatherAndForecast } from '../hooks/use.get.weather.and.forecast';

export function WeatherForecastWidget() {
  const { fiveDayForecast, isLoading } = useGetWeatherAndForecast();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-8 bg-secondary rounded-2xl grid items-center grid-cols-5 col-span-1 lg:col-span-2'>
          {fiveDayForecast?.map((forecast) => (
            <div
              key={forecast.dt_txt}
              className='justify-self-center text-center space-y-6'
            >
              <h4>{DAYS[new Date(forecast.dt_txt).getDay()]}</h4>
              <Icon
                extra='mx-auto'
                Icon={WEATHER_ICON[forecast.weather[0].main as WeatherKey]}
                size='40'
              />
              <h3>{forecast.main.temp.toFixed()}&deg;c</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
