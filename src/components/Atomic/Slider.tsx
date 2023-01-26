import React from "react";

export const Slider = () => {
  const datas = [""];
  return (
    <>
      <div>
        {datas.map((item, idx) => {
          return (
            <div className="box">
            <span>Icons</span>
            <h3>
              <strong>$143,624</strong>
            </h3>
            <span>Your bank balance</span>
          </div>
          )
        })}
      </div>
    </>
  );
};
