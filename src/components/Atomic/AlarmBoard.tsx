import React, { useState, useCallback } from "react";

const AlarmBoard = () => {
  const [alarmChecked, setAlarmChecked] = useState(-1);
  const alarmData = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];

  const onclickButton = useCallback((idx:number) => {
    setAlarmChecked(idx)
  },[]);

  return (
    <>
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
        {/* S: ListComponent로 빼기 */}
        {alarmData.map((item, idx) => {
          return (
            <div className={alarmChecked === idx ? "alarm-box hidden" : "alarm-box"} key={`alarm--${idx}`}>
              <button type="button" onClick={() => onclickButton(idx)}>
                X
              </button>
              <p>{item}</p>
            </div>
          );
        })}
        {/* E: ListComponent로 빼기 */}
      </div>
    </>
  );
};

export default AlarmBoard;
