import OpenWeatherMap from 'openweathermap-ts';

export const openWeather = new OpenWeatherMap({ apiKey: import.meta.env.VITE_APP_KEY });
