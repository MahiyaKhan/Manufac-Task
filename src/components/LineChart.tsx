import React, { FC, useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import wineData from "./WineData.json"; // import the WineData.json file as a module

interface WineData {
  Flavanoids: number;
  Ash: number;
}

const LineChart: FC = () => {
  const [data, setData] = useState<WineData[]>([]);

  useEffect(() => {
    setData(wineData as WineData[]); // set the imported data to the data state
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
