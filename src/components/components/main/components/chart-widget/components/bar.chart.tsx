import { Bar, XAxis, Tooltip, BarChart, ResponsiveContainer } from 'recharts';
import type { IChartData } from '../../../../../../types/chart.types';
import { getChartData } from '../chart.config';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fiveDayForecast: any;
  selectedType: keyof Omit<IChartData, 'day'>;
}

export function BarChartView({ fiveDayForecast, selectedType }: Props) {
  const chartData = getChartData(fiveDayForecast) || [];

  return (
    <ResponsiveContainer
      width='100%'
      height='100%'
    >
      <BarChart data={chartData}>
        <Bar
          dataKey={selectedType}
          fill='var(--color-secondary)'
          stroke='var(--color-primary)'
        />
        <XAxis dataKey='day' />
        <Tooltip
          labelClassName='text-accent'
          itemStyle={{ color: '#000' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
