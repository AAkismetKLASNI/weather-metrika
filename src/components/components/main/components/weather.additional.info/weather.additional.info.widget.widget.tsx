import { useGetWeatherCity } from '../../hooks/use.get.weather.city';
import { Loader } from '../../../../ui/loader';
import { Droplet, Eye, Thermometer, Wind } from 'lucide-react';
import { InfoCard } from './info.card';

export function WeatherAdditionalInfoWidget() {
  const { weatherCity, isLoading } = useGetWeatherCity();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='p-4 bg-secondary rounded-2xl grid items-center grid-cols-2'>
          <InfoCard
            title='humidity'
            value={`${weatherCity?.main.humidity}%`}
            icon={Droplet}
          />
          <InfoCard
            title='wind speed'
            value={`${weatherCity?.wind.speed.toFixed()}m`}
            icon={Wind}
          />
          <InfoCard
            title='feels like'
            value={`${weatherCity?.main.feels_like.toFixed()}c`}
            icon={Thermometer}
          />
          <InfoCard
            title='humidity'
            value={`${Math.round(weatherCity?.visibility / 1000)}km`}
            icon={Eye}
          />
        </div>
      )}
    </>
  );
}
