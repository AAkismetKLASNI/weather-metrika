import { useGetWeatherCity } from '../../../hooks/use.get.weather.city';
import { WeaherNowWidget } from './components/weaher.now.widget';

export function Main() {
  const { weatherCity } = useGetWeatherCity();

  return (
    <main className='grid grid-cols-4 gap-16'>
      {weatherCity ? (
        <>
          <WeaherNowWidget />
        </>
      ) : (
        <h1>No metrika</h1>
      )}
    </main>
  );
}
