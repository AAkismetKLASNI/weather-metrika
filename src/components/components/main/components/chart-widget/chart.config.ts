import {
  Thermometer,
  Droplet,
  Wind,
  Gauge,
  LineChartIcon,
  BarChart3Icon,
} from 'lucide-react';
import { IChartType, IChartView } from '../../../../../types/chart.types';

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
