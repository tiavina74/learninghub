import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function CoursChart() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Notes',
        data: [85, 90, 78, 88, 95],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Math', 'Science', 'History', 'Literature', 'Art'],
      },
      yaxis: {
        title: {
          text: 'Note (sur 100)',
        },
      },
      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <div>
      <h3>Distribution des notes des Cours</h3>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default CoursChart;
