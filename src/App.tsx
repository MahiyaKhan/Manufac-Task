import React, { FC } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

const App: FC = () => {
  return (
    <>
      <LineChart />
      <BarChart />
    </>
  );
};

export default App;
