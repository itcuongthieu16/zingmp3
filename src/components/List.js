import React, { memo } from "react";
import icons from "../untils/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const { FiMusic } = icons;

const List = ({ songData }) => {
  // console.log(songData);

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(actions.setCurSongId(songData?.encodeId));
        dispatch(actions.play(true));
      }}
      className="flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#dde4e4] cursor-pointer"
    >
      <div className="flex items-center justify-start gap-3 flex-1">
        <span>
          <FiMusic />
        </span>
        <img
          src={songData.thumbnail}
          alt="thumbnailM"
          className="w-[40px] h-[40px] object-cover border rounded-md"
        />
        <span className="flex flex-col w-full">
          <span className="text-[14px] font-semibold">
            {songData?.title?.length > 30
              ? `${songData?.title?.slice(0, 20)}...`
              : songData?.title}
          </span>
          <span className="text-[12px]">{songData?.artistsNames}</span>
        </span>
      </div>
      <div className="flex-1 flex justify-center text-[13px] font-[500]">
        {songData?.album?.title?.length > 30
          ? `${songData?.album?.title?.slice(0, 20)}...`
          : songData?.album?.title}
      </div>
      <div className="flex-1 flex justify-end text-[13px] font-[500]">
        {moment.utc(songData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(List);
