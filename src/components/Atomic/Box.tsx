import React, { FC } from "react";

interface Props{
boxDatas: Array<{icon:string; amount:string; desc:string}>
}

export const Box:FC<Props> = ({boxDatas}) => {
  return (
    <>
      {boxDatas.map((item, idx) => {
        return (
          <div className="box" key={`box--${idx}`}>
            <span>{item.icon}</span>
            <h3>
              <strong>{item.amount}</strong>
            </h3>
            <span>{item.desc}</span>
          </div>
        );
      })}
    </>
  );
};
