import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponent = ({ services }) => {
  const chartOptions = useMemo(() => {
    const values = {
      series: [60, 20, 10, 5, 5],
      options: {
        labels: ['Web Design', 'Web Development', 'App Development', 'SEO', 'Marketing'],
        chart: {
          type: 'donut',
        },

        colors: ['#7ED957', '#17B169', '#7ED957', '#3A8C17', '#185100'],
        responsive: [
          {
            breakpoint: 2400,
            options: {
              chart: {
                width: 500,
                history: 200,
              },
              legend: {
                position: 'right',
              },
            },
          },
          {
            breakpoint: 1440,
            options: {
              chart: {
                width: 400,
                height: 400,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
          {
            breakpoint: 1150,
            options: {
              chart: {
                width: 380,
                height: 400,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
          {
            breakpoint: 767,
            options: {
              chart: {
                width: 480,
                height: 500,
              },
              legend: {
                position: 'right',
              },
            },
          },
          {
            breakpoint: 500,
            options: {
              chart: {
                width: 350,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        fetch,
      },
    };
    if (services) {
      console.log(services, 'Services');
      const labels = services?.map((service) => service.name);
      const series = services?.map((service) => service.percentage);
      values.series = series;
      values.options.labels = labels;
      return values;
    } else {
      return null;
    }
  }, [services]);
  return (
    <div>
      {chartOptions && (
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type='donut' id='donut-cart' />
      )}{' '}
    </div>
  );
};

// export default DonutChartComponent;
export default ChartComponent;
