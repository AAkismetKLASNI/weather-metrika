import { useGetCity } from '../../../hooks/use.get.city';

export function Main() {
  const { city } = useGetCity();

  console.log('city,', city);

  return <div>main</div>;
}
