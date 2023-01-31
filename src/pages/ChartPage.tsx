import React from "react";
import {
  BarChartComponent,
  ComposedChartComponent,
  LineChartComponets,
  ScatterCustomChart,
} from "../components";

export const ChartPage = () => {
  return (
    <>
      <ScatterCustomChart />
      <LineChartComponets />
      <BarChartComponent />
      <ComposedChartComponent />
    </>
  );
};

export default ChartPage;
