import {
  Thermometer,
  Droplet,
  Wind,
  Gauge,
  LineChartIcon,
  BarChart3Icon,
} from 'lucide-react';
import { IChartType, IChartView } from '../../../../../types/chart.types';
import { DAYS } from '../../../../../config/days.config';

export const chartType: IChartType[] = [
  { icon: Thermometer, type: 'temp' },
  { icon: Droplet, type: 'humidity' },
  { icon: Wind, type: 'wind' },
  { icon: Gauge, type: 'pressure' },
];

export const chartView: IChartView[] = [
  { icon: LineChartIcon, view: 'line' },
  { icon: BarChart3Icon, view: 'bar' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getChartData = (data: any[]) => {
  return data?.map((forecast) => ({
    day: DAYS[new Date(forecast.dt_txt).getDay()],
    temp: forecast.main.temp,
    humidity: forecast.main.humidity,
    wind: forecast.wind.speed,
    pressure: forecast.main.pressure,
  }));
};
