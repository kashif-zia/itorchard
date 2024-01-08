import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChartComponent = ({ selectedServices = [], generateGreenColors = [], legend }) => {
  const [label, setLabel] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (selectedServices) {
      const labels = selectedServices.map((data) => data.name);
      const percentages = selectedServices.map((data) => data.percentage);

      setLabel(labels);
      setSeries(percentages);
      console.log('inides');
    }
  }, [selectedServices]);

  const options = {
    chart: {
      type: 'donut',
      width: 290,
      height: 290,
    },
    labels: label,
    colors: generateGreenColors,
    legend: {
      show: legend,
    },
    responsive: [
      {
        breakpoint: 2400,
        options: {
          chart: {},
        },
      },
    ],
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type='donut' id='donut-chart' />
    </div>
  );
};

export default DonutChartComponent;

// import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';

// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// const DonutChartComponent = ({ selectedServices: selectedServices = [], generateGreenColors = [], legend }) => {
//   const [label, setLabel] = useState([]);
//   const [series, setSeries] = useState([]);

//   useEffect(() => {
//     if (selectedServices) {
//       setLabel([]);
//       setSeries([]);
//       selectedServices.map((data) => {
//         setLabel((prevState) => [...prevState, data.name]);
//         setSeries((prevState) => [...prevState, data.percentage]);
//       });
//     }
//   }, [selectedServices]);

//   const options = {
//     chart: {
//       type: 'donut',
//       width: 290,
//       height: 290,
//     },
//     labels: label,
//     colors: generateGreenColors,
//     legend: {
//       show: legend,
//     },
//     responsive: [
//       {
//         breakpoint: 2400,
//         options: {
//           chart: {},
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactApexChart options={options} series={series} type='donut' id='donut-chart' />
//     </div>
//   );
// };

// export default DonutChartComponent;
