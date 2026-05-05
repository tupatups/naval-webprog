import { useRef } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;

    if (!printContent) {
      return;
    }

    const printWindow = window.open('', '_blank', 'width=1200,height=900');

    if (!printWindow) {
      return;
    }

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Print Report</title>
          ${headMarkup}
          <style>
            @page {
              size: A4;
              margin: 16mm;
            }

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: #fff;
              color: #1f2937;
            }

            .report-shell {
              padding: 28px;
            }

            .report-header {
              margin-bottom: 24px;
              padding-bottom: 14px;
              border-bottom: 1px solid #d1d5db;
            }

            .report-header h1 {
              margin: 0 0 6px;
              font-size: 28px;
              font-weight: 700;
            }

            .report-header p {
              margin: 0;
              font-size: 14px;
              color: #6b7280;
              background: #fff;
              line-height: 1.5;
            }

            .report-content .MuiCard-root {
              box-shadow: none !important;
              border: 1px solid #e5e7eb;
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .report-content .MuiCardContent-root {
              padding: 20px;
            }

            .report-content svg {
              max-width: 100%;
            }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <h1>Reports Summary</h1>
              <p>Analytics overview for generated reports, category breakdown, and completion performance.</p>
              <p>Prepared on ${exportedAt}</p>
            </header>
            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Reports
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Report analytics overview showing generated reports,
            category breakdown, and current completion performance.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Generate</Button>
          <Button variant="outlined" onClick={handlePrint}>Export</Button>
          <Button variant="outlined">Filter</Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        {/* Summary Cards */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
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
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Quarterly Performance
            </Typography>
            <BarChart
              series={quarterlyData}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
            />
          </CardContent>
        </Card>

        {/* Distribution Chart */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Distribution
            </Typography>
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
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default ReportsPage;