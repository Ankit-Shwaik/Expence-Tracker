import React from "react";
import Chart from "react-apexcharts";

const data = {
  series: [3000, 4000, 8000, 3240],
  options: {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: ["Health", "transport", "Food", "Shopping"],
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
    fill: {
      colors: ["#23d7be", "#5e17a5", "#231882"],
    },
  },
};

function PieChart() {
  return (
    <>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width="300"
        height="220"
      />
    </>
  );
}

export default PieChart;
