import React, { useState } from 'react';
import { RetailRecord } from '../../data/retail_sales';
import SalesChartCard from '../molecules/SalesChartCard';
import FilterInput from '../atoms/FilterInput';

interface DashboardChartsProps {
  retailData: RetailRecord[];
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function DashboardCharts({ retailData }: DashboardChartsProps) {
  const [threshold, setThreshold] = useState(0);

  
  const convertForYear = (year: number) => {
    const monthlyMap = new Map<number, number>();
  
    
    retailData.forEach((row) => {
      const dt = new Date(row.Period);
      if (dt.getFullYear() === year) {
        monthlyMap.set(dt.getMonth(), row.Value);
      }
    });
  
    
    const completed = Array.from({ length: 12 }, (_, monthIndex) => ({
      month: monthNames[monthIndex],
      sales: monthlyMap.get(monthIndex) ?? 0,
    }));
  
    return completed;
  };
  const data2022 = convertForYear(2022);
  const data2023 = convertForYear(2023);
  const data2024 = convertForYear(2024);

  return (
    <div className="container mx-auto p-6">
      <FilterInput value={threshold} onChange={setThreshold} />

      <SalesChartCard data={data2024} year={2024} />
      <SalesChartCard data={data2023} year={2023} />
      <SalesChartCard data={data2022} year={2022} />
    </div>
  );
}