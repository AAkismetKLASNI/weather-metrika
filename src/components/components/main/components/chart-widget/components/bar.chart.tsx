import { Bar, XAxis, Tooltip, BarChart, ResponsiveContainer } from 'recharts';
import type { IChartData } from '../../../../../../types/chart.types';

interface Props {
  chartData: any;
  selectedType: keyof Omit<IChartData, 'day'>;
}

export function BarChartView({ chartData, selectedType }: Props) {
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
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
}
