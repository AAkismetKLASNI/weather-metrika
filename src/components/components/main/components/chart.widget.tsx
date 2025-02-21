import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from 'recharts';
import { DAYS } from '../../../../config/days.config';
import { Icon } from '../../../ui/icon';
import { Droplet, Gauge, Thermometer, Wind } from 'lucide-react';
import { useState } from 'react';
import { IChartData, IChartType } from '../../../../types/chart.types';
import { Loader } from '../../../ui/loader';
import { useGetWeatherAndForecast } from '../hooks/use.get.weather.and.forecast';

const chartType: IChartType[] = [
  { icon: Thermometer, type: 'temp' },
  { icon: Droplet, type: 'humidity' },
  { icon: Wind, type: 'wind' },
  { icon: Gauge, type: 'pressure' },
];

export function ChartWidget() {
  const [selectedType, setSelectedType] = useState<keyof Omit<IChartData, 'day'>>('temp');

  const { fiveDayForecast, isLoading } = useGetWeatherAndForecast();

  const chartData = fiveDayForecast?.map((forecast) => ({
    day: DAYS[new Date(forecast.dt_txt).getDay()],
    temp: forecast.main.temp,
    humidity: forecast.main.humidity,
    wind: forecast.wind.speed,
    pressure: forecast.main.pressure,
  }));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex gap-2 p-4 bg-secondary rounded-2xl col-span-2 row-span-2'>
          <div className='flex flex-col gap-4'>
            {chartType.map(({ icon, type }, index) => (
              <Icon
                key={index}
                onClick={() => setSelectedType(type)}
                Icon={icon}
                extra={`${
                  type === selectedType && 'opacity-100'
                } cursor-pointer transition-opacity opacity-30 hover:opacity-100`}
                size='30'
              />
            ))}
          </div>
          <ResponsiveContainer
            width='100%'
            height='100%'
          >
            <LineChart data={chartData}>
              <Line
                type='monotone'
                dataKey={selectedType}
              />
              <XAxis dataKey='day' />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
