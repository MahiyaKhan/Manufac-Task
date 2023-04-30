import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import wineData from "./WineData.json";
import { groupBy } from "lodash";

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(wineData);
  }, []);

  const groupedData = groupBy(data, "Alcohol");
  const xAxisData = Object.keys(groupedData).map((key) => Number(key));
  const seriesData = Object.values(groupedData).map((group) => {
    const magnesiusValues = group.map((item) => item.Magnesium);
    const minMagnesium = Math.min(...magnesiusValues);
    return minMagnesium;
  });

  const barChartOptions = {
    xAxis: {
      type: "category",
      name: "Alcohol",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      name: "Magnesium",
      min: 0,
    },
    series: [
      {
        type: "bar",
        data: seriesData,
      },
    ],
  };

  return React.createElement(ReactEcharts, { option: barChartOptions });
};

export default BarChart;
