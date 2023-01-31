import React, { FC, useCallback, useState, useEffect } from "react";

interface Props {
  listItem: Array<string>;
  listType: "vertical" | "horizontal";
}

const VerticalList: FC<Props> = ({ listItem, listType }) => {
  const [now, setNow] = useState(0);

  const onClickHandler = useCallback(
    (idx:number) => {
      setNow(idx);
    },
    [now]
  );

  return (
    <>
      <ul className={`sidebar ${listType}`}>
        {listItem.map((item, idx) => {
          return (
            <li className={(now === idx) ? "sidebar--item now" : 'sidebar--item'} key={`key--${idx}-${item}`}>
              <button type="button" onClick={() => onClickHandler(idx)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default VerticalList;
