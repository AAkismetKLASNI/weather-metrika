import { useSetAtom } from 'jotai';
import { geoLocationAtom } from '../store/geo.location';

export function useGetCurrentGeo() {
  const setGeoLocation = useSetAtom(geoLocationAtom);

  const getGeoCurrentGeo = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setGeoLocation({ lat: latitude, lon: longitude });
    });
  };

  return { getGeoCurrentGeo };
}
