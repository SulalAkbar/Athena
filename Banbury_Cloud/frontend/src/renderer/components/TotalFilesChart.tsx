import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TotalFilesChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [200, 500, 550, 700, 600, 800],
        },
      ]}
      width={400}
      height={300}
    />
  );
}
