import { Cloud, CloudFog, CloudSnow, CloudRain, Sun } from 'lucide-react';

export const WEATHER_ICON = {
  Clouds: Cloud,
  Fog: CloudFog,
  Haze: CloudFog,
  Mist: CloudFog,
  Clear: Sun,
  Snow: CloudSnow,
  Rain: CloudRain,
} as const;
