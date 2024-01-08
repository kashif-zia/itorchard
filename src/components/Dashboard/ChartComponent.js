import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class DonutChartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60, 20, 10, 5],
      options: {
        chart: {
          type: 'donut',
        },

        labels: ['Web Development', 'App Development', 'Web Design', 'Dekstop Applications'],
        colors: ['#7ED957', '#17B169', '#7ED957', '#3A8C17', '#185100'],
        responsive: [
          {
            breakpoint: 2400,
            options: {
              chart: {
                width: 450,
                height: 177,
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
           {
          breakpoint: 345,
          options: {
            chart: {
              width: 300,
          
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 320,
          options: {
            chart: {
              width: 100,
              height: 100
              
            },
            legend: {
              position: 'bottom',
            },
          },
        },
         
        ],fetch
      },
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart options={this.state.options} series={this.state.series} type='donut' id='donut-cart' />
      </div>
    );
  }
}

export default DonutChartComponent;
