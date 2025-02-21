import { useSetAtom } from 'jotai';
import { geoLocationAtom } from '../../../../store/geo.location';
import { useEffect } from 'react';
import type { IGeoLocation } from '../../../../types/geo.location.types';

export function useGeoHandlers() {
  const setGeoLocation = useSetAtom(geoLocationAtom);

  useEffect(() => {
    const data = localStorage.getItem('geo');

    if (data) {
      const { lat, lon } = JSON.parse(data) as IGeoLocation;
      setGeoLocation({ lat, lon });
    }
  }, [setGeoLocation]);

  const getGeoCurrentGeo = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude: lat, longitude: lon } = position.coords;

      setGeoLocation({ lat, lon });

      localStorage.setItem('geo', JSON.stringify({ lat, lon }));
    });
  };

  const getGeo = (lat: number, lon: number) => {
    setGeoLocation({ lat, lon });

    localStorage.setItem('geo', JSON.stringify({ lat, lon }));
  };

  return { getGeoCurrentGeo, getGeo };
}
