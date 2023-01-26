import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
  Line,
} from "recharts";

const BarChartComponent = () => {
  const data01 = [
    {
      x: 100,
      y: 200,
      z: 200,
    },
    {
      x: 120,
      y: 100,
      z: 260,
    },
    {
      x: 170,
      y: 300,
      z: 400,
    },
    {
      x: 140,
      y: 250,
      z: 280,
    },
    {
      x: 150,
      y: 400,
      z: 500,
    },
    {
      x: 110,
      y: 280,
      z: 200,
    },
  ];

  const data02 = [
    { x: "2015-12-24", open: 511.53, high: 514.98, low: 505.79, close: 506.4 },
    { x: "2015-12-25", open: 512.53, high: 514.88, low: 505.69, close: 510.34 },
    { x: "2015-12-26", open: 511.83, high: 514.98, low: 505.59, close: 507.23 },
    { x: "2015-12-27", open: 511.22, high: 515.3, low: 505.49, close: 506.47 },
    { x: "2015-12-28", open: 511.53, high: 514.98, low: 505.79, close: 506.4 },
    { x: "2015-12-29", open: 512.53, high: 513.88, low: 505.69, close: 510.34 },
    { x: "2015-12-30", open: 511.83, high: 512.98, low: 502.59, close: 503.23 },
    { x: "2015-12-31", open: 511.22, high: 515.3, low: 505.49, close: 506.47 },
    { x: "2016-01-01", open: 510.35, high: 515.72, low: 505.23, close: 508.8 },
  ];

  return (
    <>
      <div className="chart-wrapper half-size prvnt--ovrflowed">
        <ResponsiveContainer width={'100%'} height={250} className="text-center">
          <BarChart width={430} height={170} data={data02}>
            <XAxis type="category" orientation="bottom" stroke="#285A64" />
            <YAxis orientation="left" stroke="#285A64" />
            <Bar dataKey="high" fill="#8884d8" width={30}>
              <Line></Line>
              {/* <LabelList
            dataKey="x"
            position="insideRight"
            style={{ fill: "blue" }}
          /> */}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarChartComponent;
