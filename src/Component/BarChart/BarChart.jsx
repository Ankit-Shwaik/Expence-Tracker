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
};
function BarChart() {
  const [chartData, setChartData] = useState(data);
  console.log(chartData);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="600"
            height="320"
          />
        </div>
      </div>
    </div>
  );
}
export default BarChart;
