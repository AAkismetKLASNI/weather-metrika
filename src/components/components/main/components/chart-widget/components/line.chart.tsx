import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { IChartData } from '../../../../../../types/chart.types';
import { getChartData } from '../chart.config';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fiveDayForecast: any;
  selectedType: keyof Omit<IChartData, 'day'>;
}

export function LineChartView({ fiveDayForecast, selectedType }: Props) {
  const chartData = getChartData(fiveDayForecast) || [];

  return (
    <ResponsiveContainer
      width='100%'
      height='100%'
    >
      <LineChart data={chartData}>
        <Line
          type='monotone'
          dataKey={selectedType}
          stroke='var(--color-primary)'
        />
        <XAxis dataKey='day' />
        <Tooltip
          labelClassName='text-accent'
          itemStyle={{ color: '#000' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
