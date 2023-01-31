import React, { useEffect, useState } from "react";
import { Sidebar, AlarmBoard, Box } from "./components/index";
import ChartPage from "./pages/ChartPage";
import { boxDummy } from "./assets/dummy";

function App() {
  // const {} = useQuery('user',)
  // S: Data fetch
  useEffect(() => {}, []);

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

        <div className="slider-wrapper">
          <Box boxDatas={boxDummy} />
        </div>

        <div>
          <ChartPage />
        </div>
      
      </div>
      {/* E: Content Area */}

      {/* S: Right */}
      <AlarmBoard />
    </div>
  );
}

export default App;
