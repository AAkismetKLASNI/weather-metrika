import { DAYS } from '../../../../../config/days.config';
import { Icon } from '../../../../ui/icon';
import { useState } from 'react';
import type { IChartData } from '../../../../../types/chart.types';
import { Loader } from '../../../../ui/loader';
import { useGetWeatherAndForecast } from '../../hooks/use.get.weather.and.forecast';
import { chartType, chartView } from './chart.config';
import { BarChartView } from './components/bar.chart';
import { LineChartView } from './components/line.chart';

export function ChartWidget() {
  const [selectedType, setSelectedType] = useState<keyof Omit<IChartData, 'day'>>('temp');
  const [selectedView, setSelectedView] = useState<'line' | 'bar'>('line');

  const { fiveDayForecast, isLoading } = useGetWeatherAndForecast();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex gap-2 p-4 bg-secondary rounded-2xl col-span-1 lg:col-span-2 xl:row-span-2'>
          <div className='flex flex-col gap-4'>
            {chartType.map(({ icon, type }, index) => (
              <Icon
                key={index}
                onClick={() => setSelectedType(type)}
                Icon={icon}
                extra={`${
                  type === selectedType && 'opacity-100'
                } cursor-pointer transition-opacity opacity-30 hover:opacity-100`}
                size='25'
              />
            ))}
          </div>

          {selectedView === 'bar' ? (
            <BarChartView
              chartData={chartData}
              selectedType={selectedType}
            />
          ) : (
            <LineChartView
              chartData={chartData}
              selectedType={selectedType}
            />
          )}

          <div className='flex flex-col gap-4'>
            {chartView.map(({ icon, view }, index) => (
              <Icon
                key={index}
                onClick={() => setSelectedView(view)}
                Icon={icon}
                extra={`${
                  view === selectedView && 'opacity-100'
                } cursor-pointer transition-opacity opacity-30 hover:opacity-100`}
                size='25'
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
