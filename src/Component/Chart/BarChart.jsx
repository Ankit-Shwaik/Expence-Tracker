import React, { useState } from "react";
import Chart from "react-apexcharts";

const data = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 0,
          color: "#EB656F",
          opacity: 1,
        },
        {
          offset: 20,
          color: "#FAD375",
          opacity: 1,
        },
        {
          offset: 60,
          color: "#61DBC3",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#95DA74",
          opacity: 1,
        },
      ],
    },
  },
};
function BarChart() {
  const [chartData, setChartData] = useState(data);

  return (
    <div className="app">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="600"
        height="320"
      />
    </div>
  );
}
export default BarChart;
