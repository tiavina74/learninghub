import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function EtudiantChart() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Performance',
        data: [60, 65, 70, 75, 80, 85, 90],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      stroke: {
        width: 4,
        curve: 'smooth',
      },
      title: {
        text: 'Performance de l\'étudiant au fil du temps',
        align: 'left',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      yaxis: {
        title: {
          text: 'Performance (%)',
        },
      },
    },
  });

  return (
    <div>
      <h3>Suivi des performances des étudiants</h3>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default EtudiantChart;
