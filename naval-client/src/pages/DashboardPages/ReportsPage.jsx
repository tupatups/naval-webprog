import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const quarterlyData = [
  { data: [35, 44, 24, 34], label: 'Series 1' },
  { data: [51, 6, 49, 30], label: 'Series 2' },
];

const dataset = [
  { month: 'Jan', london: 50, paris: 42, newYork: 35 },
  { month: 'Feb', london: 62, paris: 38, newYork: 40 },
  { month: 'Mar', london: 55, paris: 44, newYork: 46 },
  { month: 'Apr', london: 70, paris: 52, newYork: 58 },
  { month: 'May', london: 68, paris: 49, newYork: 60 },
  { month: 'Jun', london: 64, paris: 45, newYork: 55 },
];

const valueFormatter = (value) => `${value} mm`;

const chartSetting = {
  xAxis: [{ label: 'rainfall (mm)' }],
  height: 300,
};

function ReportsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="h4">$48,295</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Growth Rate</Typography>
            <Typography variant="h4">+12.5%</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Active Projects</Typography>
            <Typography variant="h4">7</Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Bar Chart */}
      <Typography variant="h5" gutterBottom>
        Quarterly Performance
      </Typography>
      <Box sx={{ mb: 4 }}>
        <BarChart
          series={quarterlyData}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
        />
      </Box>

      {/* Distribution Chart */}
      <Typography variant="h5" gutterBottom>
        Distribution
      </Typography>
      <Box sx={{ mb: 4 }}>
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { dataKey: 'london', label: 'London', valueFormatter },
            { dataKey: 'paris', label: 'Paris', valueFormatter },
            { dataKey: 'newYork', label: 'New York', valueFormatter },
          ]}
          layout="horizontal"
          slotProps={{
            legend: {
              toggleVisibilityOnClick: true,
            },
          }}
          {...chartSetting}
        />
      </Box>
    </>
  );
}

export default ReportsPage;
