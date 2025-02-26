import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { IChartData } from '../../../../../../types/chart.types';

interface Props {
  chartData: any;
  selectedType: keyof Omit<IChartData, 'day'>;
}

export function LineChartView({ chartData, selectedType }: Props) {
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
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
