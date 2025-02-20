import axios, { AxiosResponse } from 'axios';
import { ICity } from '../types/city.types';
import { openWeather } from '../api/open.weather';

class CityService {
  getCities(searchTerm: string, limit: string): Promise<AxiosResponse<ICity[]>> {
    return axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=${limit}&appid=${
        import.meta.env.VITE_APP_KEY
      }`
    );
  }

  getWeatherByGeo(lat: number, lon: number) {
    return openWeather.getCurrentWeatherByGeoCoordinates(lat, lon);
  }

  getForecastByGet(lat: number, lon: number) {
    return openWeather.getThreeHourForecastByGeoCoordinates(lat, lon);
  }
}

export const cityService = new CityService();
