import React, { FC, useCallback, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

interface Props {
  listItem: Array<string>;
  listType: "vertical" | "horizontal";
}

const VerticalList: FC<Props> = ({ listItem, listType }) => {
  const [now, setNow] = useState(false);

  const onSelectMenuHandelr = useCallback(
    (e: any) => {
      console.log(e);
    },
    [now]
  );

  return (
    <>
      <ul className={`sidebar ${listType}`}>
        {listItem.map((item, idx) => {
          return (
            <li className="sidebar--item" key={`key--${idx}-${item}`}>
              <button type="button" onClick={onSelectMenuHandelr}>
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
