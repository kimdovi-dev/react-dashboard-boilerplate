import React from "react";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ComposedChartComponent = () => {
  const data02 = [
    { x: "2015-12-24", open: 511.53, high: 652.98, low: 505.79, close: 506.4 },
    { x: "2015-12-25", open: 512.53, high: 714.88, low: 305.69, close: 510.34 },
    { x: "2015-12-26", open: 511.83, high: 414.98, low: 105.59, close: 507.23 },
    { x: "2015-12-27", open: 511.22, high: 515.3, low: 420.49, close: 506.47 },
    { x: "2015-12-28", open: 511.53, high: 714.98, low: 505.79, close: 506.4 },
    { x: "2015-12-29", open: 512.53, high: 513.88, low: 357.69, close: 510.34 },
    { x: "2015-12-30", open: 511.83, high: 802.98, low: 502.59, close: 503.23 },
    { x: "2015-12-31", open: 511.22, high: 515.3, low: 505.49, close: 506.47 },
    { x: "2016-01-01", open: 510.35, high: 515.72, low: 505.23, close: 508.8 },
  ];

  return (
    <>
      <div className="chart-wrapper half-size">
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={data02}>
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="high" fill="pink" />
            <Line dataKey="low" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ComposedChartComponent;
