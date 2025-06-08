import React, { useState } from 'react';
import { SalesRecord } from '../../data/sales';
import ChartWrapper from '../atoms/ChartWrapper';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

interface SalesChartCardProps {
  data: SalesRecord[];
  year: number;
}

const SalesChartCard: React.FC<SalesChartCardProps> = ({ data, year }) => {
  const [threshold, setThreshold] = useState(10000);

  const filteredData = data.filter((rec) => rec.sales >= threshold);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Sales in {year}</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="threshold" className="text-sm font-medium">Threshold:</label>
          <select
            id="threshold"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="border px-2 py-1 rounded text-sm"
          >
            <option value={10000}>10,000</option>
            <option value={20000}>20,000</option>
            <option value={30000}>30,000</option>
            <option value={40000}>40,000</option>
          </select>
        </div>
      </div>

      <ChartWrapper height={250}>
  <BarChart
    data={filteredData}
    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" interval={0} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="sales" fill="#4f46e5" barSize={30} radius={[4, 4, 0, 0]} />
  </BarChart>
</ChartWrapper>

      <p className="mt-2 text-sm text-gray-500">
        Showing months with sales ≥ {threshold.toLocaleString()}
      </p>
    </div>
  );
};

export default SalesChartCard;