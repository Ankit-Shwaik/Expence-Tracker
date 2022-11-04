import React, { useState } from "react";
import Chart from "react-apexcharts";

const data = {
  series: [3000, 5000, 840],
  options: {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: ["Health", "Transport", "Housing"],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    title: {
      text: "",
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    legend: {
      show: false,
    },
  },
};

function PieChart() {
  const [chartData, setChartData] = useState(data);

  return (
    <>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="300"
        height="220"
      />
    </>
  );
}

export default PieChart;
