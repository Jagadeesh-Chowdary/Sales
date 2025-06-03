import React from 'react';
import { SalesRecord } from '../../data/sales';
import ChartWrapper from '../atoms/ChartWrapper';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface SalesChartCardProps {
  data: SalesRecord[];
  year: number;
  threshold: number;
}

const SalesChartCard: React.FC<SalesChartCardProps> = ({ data, year, threshold }) => {
  const filteredData = data.filter((rec) => rec.sales >= threshold);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Sales in {year}</h2>
      <ChartWrapper height={250}>
        <LineChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
        </LineChart>
      </ChartWrapper>
      {threshold > 0 && (
        <p className="mt-2 text-sm text-gray-500">
          Showing months with sales ≥ {threshold}
        </p>
      )}
    </div>
  );
};

export default SalesChartCard;