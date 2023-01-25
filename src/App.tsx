import React from "react";
import { BarChart, ScatterCustomChart, Sidebar } from "./components/index";

function App() {
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
        <div style={{ display: "flex", marginBottom: "2rem" }}>
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
        <ScatterCustomChart />
      </div>
      {/* E: Content Area */}

      {/* S: Right */}
      <div className="alarm--pannel">
        <h1
          style={{
            color: "#1d1955",
            fontSize: "18px",
            fontWeight: "bolder",
            marginBottom: "1rem",
          }}
        >
          Status Board
        </h1>
      </div>
    </div>
  );
}

export default App;
