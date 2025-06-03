import React from 'react';

interface FilterInputProps {
  value: number;
  onChange: (value: number) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="threshold" className="block text-sm font-medium text-gray-700">
        Sales Threshold
      </label>
      <input
        id="threshold"
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter minimum sales"
      />
    </div>
  );
};

export default FilterInput;