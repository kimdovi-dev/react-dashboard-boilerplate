import React, { useEffect, useState, useCallback } from "react";
import { Sidebar, AlarmBoard, Box } from "./components/index";
import ChartPage from "./pages/ChartPage";
import { boxDummy } from "./assets/dummy";

function App() {
  const [slider, setSlider] = useState(0);
  const onSliderHandler = useCallback((type: string) => {
    type === "prev" && setSlider(slider + 150);
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

        <div className="slider-wrapper">
          <button type="button" onClick={() => onSliderHandler("prev")}>
            prev
          </button>
          <div>
            <Box boxDatas={boxDummy} />
          </div>
          <button type="button" onClick={() => onSliderHandler("next")}>
            next
          </button>
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
