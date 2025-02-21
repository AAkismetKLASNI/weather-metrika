import { Loader } from '../../../../ui/loader';
import { Droplet, Eye, Thermometer, Wind } from 'lucide-react';
import { InfoCard } from './info.card';
import { useGetWeatherAndForecast } from '../../hooks/use.get.weather.and.forecast';

export function WeatherAdditionalInfoWidget() {
  const { weatherCity, isLoading } = useGetWeatherAndForecast();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-4 bg-secondary rounded-2xl grid gap-2 items-center grid-cols-2'>
          <InfoCard
            title='Humidity'
            value={`${weatherCity?.main.humidity}%`}
            icon={Droplet}
          />
          <InfoCard
            title='Wind speed'
            value={`${weatherCity?.wind.speed.toFixed()}m`}
            icon={Wind}
          />
          <InfoCard
            title='Feels like'
            value={`${weatherCity?.main.feels_like.toFixed()}c`}
            icon={Thermometer}
          />
          <InfoCard
            title='Visibility'
            value={`${Math.round(weatherCity?.visibility / 1000)}km`}
            icon={Eye}
          />
        </div>
      )}
    </>
  );
}
