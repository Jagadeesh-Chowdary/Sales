import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { GetStaticProps, NextPage } from 'next';
import DashboardCharts from '../components/organisms/DashboardCharts';
import { RetailRecord } from '../data/retail_sales';

interface DashboardPageProps {
  retailData: RetailRecord[];
}

const DashboardPage: NextPage<DashboardPageProps> = ({ retailData }) => {
  return <DashboardCharts retailData={retailData} />;
};

export default DashboardPage;

export const getStaticProps: GetStaticProps<DashboardPageProps> = async () => {
  const csvPath = path.join(process.cwd(), 'data', 'retail_sales.csv');
  const file = fs.readFileSync(csvPath, 'utf8');

  // Parse with header: true so `parsed.data` is an array of objects keyed by header names
  const parsed = Papa.parse<Record<string, string>>(file, {
    header: true,
    skipEmptyLines: true,
  });

  // Now transform each row into { Period: string; Value: number }
  const retailData: RetailRecord[] = parsed.data.map((row) => {
    // “Period” column is a date string
    const periodString = row['Period']!;
    // “Value” column is a string like "123,456.78"
    const valueString = row['Value']!;

    return {
      Period: periodString,
      // strip out commas, then parseFloat
      Value: parseFloat(valueString.replace(/,/g, '')),
    };
  });

  return {
    props: {
      retailData,
    },
  };
};