import React, { useEffect, useState } from "react";
import {
  BarChartComponent,
  ScatterCustomChart,
  Sidebar,
  LineChartComponets,
  ComposedChartComponent,
  AlarmBoard,
} from "./components/index";

import { getData } from "./utils/getData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // const [first, setfirst] = useState("");
  // S: Data fetch
  useEffect(() => {
    // const res = getData("/");
    // setfirst(first);
  }, []);

  return (
    <div className="App">
      {/* S:Left */}
      <Sidebar listItem={["home", "charts", "total"]} listType="vertical" />
      {/* S: Content Area */}
      <div className="pagearea">
        <h1
          style={{
            color: "#1d1955",
            fontSize: "18px",
            fontWeight: "bolder",
            marginBottom: "1rem",
          }}
        >
          TITLE AREA
        </h1>
        {/* S: BOX WRAPPER */}
        <div className="slider-wrapper">
          <div className="box">
            <span>Icons</span>
            <h3>
              <strong>$143,624</strong>
            </h3>
            <span>Your bank balance</span>
          </div>
          <div className="box">
            <span>Icons</span>
            <h3>
              <strong>$143,624</strong>
            </h3>
            <span>Your bank balance</span>
          </div>
          <div className="box">
            <span>Icons</span>
            <h3>
              <strong>$143,624</strong>
            </h3>
            <span>Your bank balance</span>
          </div>
          <div className="box">
            <span>Icons</span>
            <h3>
              <strong>$143,624</strong>
            </h3>
            <span>Your bank balance</span>
          </div>
        </div>
        {/* E: BOX WRAPPER */}

        {/* S: Chart Area */}
        <ScatterCustomChart />
        <LineChartComponets />
        <BarChartComponent />
        <ComposedChartComponent />
      </div>
      {/* E: Content Area */}

      {/* S: Right */}
      <AlarmBoard />
    </div>
  );
}

export default App;
