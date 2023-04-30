import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import wineData from "./WineData.json";

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(wineData);
  }, []);

  const lineChartOptions = {
    xAxis: {
      name: "Flavanoids",
    },
    yAxis: {
      name: "Ash",
      min: 0,
      max: 10,
    },
    series: [
      {
        type: "line",
        data: data.map((item) => [item.Flavanoids, item.Ash]),
      },
    ],
  };

  return <ReactEcharts option={lineChartOptions} />;
};

export default LineChart;
