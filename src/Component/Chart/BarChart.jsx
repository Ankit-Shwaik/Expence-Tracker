import React from "react";
import Chart from "react-apexcharts";

const data = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#23d7be", "#5e17a5"],
        type: "vertical",
        shadeIntensity: 0.25,
        opacityFrom: 0.4,
        opacityTo: 0.9,
        stops: [0, 100],
      },
      colors: ["#23d7be", "#5e17a5"],
    },
  },
  series: [
    {
      name: "series-1",
      data: [
        60, 70, 35, 25, 49, 60,

        70,
      ],
    },
  ],

  responsive: [
    {
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
function BarChart() {
  return (
    <Chart
      options={data.options}
      series={data.series}
      type="bar"
      width="100%"
      height="320"
    />
  );
}
export default BarChart;
