import axios, { AxiosResponse } from 'axios';
import { ICity } from '../types/city.types';

class CityService {
  getCities(searchTerm: string, limit: string): Promise<AxiosResponse<ICity[]>> {
    return axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=${limit}&appid=${
        import.meta.env.VITE_APP_KEY
      }`
    );
  }

  getByData(lat: number, lon: number): Promise<AxiosResponse<ICity>> {
    return axios.get(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}.34&lon=${lon}.99&appid=${
        import.meta.env.VITE_APP_KEY
      }`
    );
  }
}

export const cityService = new CityService();
