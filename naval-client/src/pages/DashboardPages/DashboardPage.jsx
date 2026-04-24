import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography, Card, CardContent } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const worldElectricityProduction = [
  { year: 2018, coal: 38.2, gas: 23.4, hydro: 15.9, nuclear: 10.2, wind: 6.8, solar: 2.9 },
  { year: 2019, coal: 37.1, gas: 23.7, hydro: 16.1, nuclear: 10.1, wind: 7.4, solar: 3.3 },
  { year: 2020, coal: 35.8, gas: 23.5, hydro: 16.4, nuclear: 10.0, wind: 8.2, solar: 3.9 },
  { year: 2021, coal: 35.4, gas: 23.1, hydro: 16.2, nuclear: 9.8, wind: 8.9, solar: 4.6 },
  { year: 2022, coal: 34.6, gas: 22.8, hydro: 16.0, nuclear: 9.7, wind: 9.6, solar: 5.4 },
  { year: 2023, coal: 33.9, gas: 22.5, hydro: 15.7, nuclear: 9.6, wind: 10.3, solar: 6.2 },
];

const keyToLabel = {
  coal: 'Coal',
  gas: 'Gas',
  hydro: 'Hydro',
  nuclear: 'Nuclear',
  wind: 'Wind',
  solar: 'Solar',
};

const colors = {
  coal: '#5d4037',
  gas: '#8d6e63',
  hydro: '#1976d2',
  nuclear: '#7b1fa2',
  wind: '#26a69a',
  solar: '#ffb300',
};

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none',
};

const customize = {
  height: 350,
  hideLegend: true,
};

function DashboardPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      {/* Summary Section */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }} display="flex">
        <Card>
          <CardContent>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">{rows.length}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">Average Age</Typography>
            <Typography variant="h4">
              {
                (rows.reduce((sum, row) => sum + (row.age || 0), 0) /
                rows.filter((row) => row.age !== null).length
                ).toFixed(1)
              }
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Charts */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <BarChart
          series={[
            { data: [35, 44, 24, 34], label: 'Series 1' },
            { data: [51, 6, 49, 30], label: 'Series 2' },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
          title="Quarterly Sales"
        />
        
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </Stack>

      {/* DataGrid */}
      <Typography variant="h5" gutterBottom>
        Users Overview
      </Typography>
      <Box sx={{ height: 400, width: '100%', mb: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      {/* Line Chart */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Electricity Production Trend
      </Typography>
      <Box sx={{ width: '100%' }}>
        <LineChart
          xAxis={[{ dataKey: 'year', valueFormatter: (value) => value.toString() }]}
          yAxis={[{ width: 50 }]}
          series={Object.keys(keyToLabel).map((key) => ({
            dataKey: key,
            label: keyToLabel[key],
            color: colors[key],
            ...stackStrategy,
          }))}
          dataset={worldElectricityProduction}
          {...customize}
        />
      </Box>
    </>
  );
}

export default DashboardPage;
