import type { LucideIcon } from 'lucide-react';

export interface IChartData {
  day: string;
  temp: number;
  humidity: number;
  wind: number;
  pressure: number;
}

export interface IChartType {
  icon: LucideIcon;
  type: keyof Omit<IChartData, 'day'>;
}
