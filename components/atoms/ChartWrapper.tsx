import React, { ReactElement } from 'react';
import { ResponsiveContainer } from 'recharts';

interface ChartWrapperProps {
  children: ReactElement;
  height?: number | string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ children, height = 300 }) => {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWrapper;