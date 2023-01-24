import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../untils/icons";

const { AiFillHeart, AiOutlineHeart, BsThreeDots } = icons;

const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await apis.getDetailSong(curSongId);
      console.log(response);
      if (response.data.err === 0) {
        setSongInfo(response.data.data);
      }
    };

    fetchDetailSong();
  }, [curSongId]);
  return (
    <div className="bg-main-400 px-5 h-full flex">
      <div className="w-[30%] flex-auto flex items-center gap-3">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col pr-[10px]">
          <span className="font-semibold text-gray-700 text-sm">
            {songInfo?.title}
          </span>
          <span className="text-xs text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap 4 items-center pl-[10px] gap-4">
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto">Main Player</div>
      <div className="w-[30%] flex-auto">Volume</div>
    </div>
  );
};

export default Player;
