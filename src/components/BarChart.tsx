import React, { FC, useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import wineData from "./WineData.json"; // import the WineData.json file as a module
import { groupBy } from "lodash";

interface WineData {
  Alcohol: number;
  Magnesium: number;
}

const BarChart: FC = () => {
  const [data, setData] = useState<WineData[]>([]);

  useEffect(() => {
    setData(wineData as WineData[]); // set the imported data to the data state
  }, []);

  const groupedData = groupBy(data, "Alcohol");
  const xAxisData = Object.keys(groupedData).map((key) => Number(key));
  const seriesData = Object.values(groupedData).map((group: WineData[]) => {
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

  return <ReactEcharts option={barChartOptions} />;
};

export default BarChart;
