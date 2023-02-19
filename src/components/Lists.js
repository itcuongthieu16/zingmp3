import React, { memo } from "react";
import List from "./List";
import icons from "../untils/icons";
import moment, { duration } from "moment";

const { TbArrowsSort, BsDot } = icons;

const Lists = ({ songs, totalDuration }) => {
  // console.log({
  //   songs: songs,
  //   totalDuration: totalDuration,
  // });
  return (
    <div className="w-full flex flex-col text-gray-600">
      <div className="flex justify-between items-center text-xs font-semibold text-gray-600 p-[10px]">
        <div className="flex items-center justify-center gap-1">
          <TbArrowsSort />
          <span>BÀI HÁT</span>
        </div>
        <span>ALBUM</span>
        <span>THỜI GIAN</span>
      </div>
      <div className="flex flex-col">
        {songs?.map((item) => (
          <List key={item.encodeId} songData={item} />
        ))}
      </div>
      <span className="flex items-center gap-1 text-[13px] font-medium py-[10px] border-t border-[rgba(0,0,0,0.05)]">
        <span>{`${songs?.length} bài hát`}</span>
        <BsDot size={20} />
        <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
      </span>
    </div>
  );
};

export default memo(Lists);
