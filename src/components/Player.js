import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../untils/icons";

const {
  AiFillHeart,
  AiOutlineHeart,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  IoIosRepeat,
  RxShuffle,
  BiPlay,
  BiPause,
  CiRepeat,
  MdPlayCircleOutline,
  MdPauseCircleOutline,
} = icons;

const Player = () => {
  const audio = new Audio()

  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);

  const [source, setSource] = useState(null);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }

      if (res2.data.err === 0) {
        setSource(res2.data.data["128"]);
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {}, [curSongId]);

  const handleTogglePlayMusic = () => {
    // audio.play()
  };
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
      <div className="w-[40%] flex-auto flex flex-col justify-center items-center gap-2 py-2">
        <div className="flex gap-8 justify-center items-center">
          <span title="Bật phát ngẫu nhiên" className="cursor-pointer">
            <RxShuffle size={20} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={20} />
          </span>
          <span
            onClick={handleTogglePlayMusic}
            className="hover:text-main-500 cursor-pointer text-100"
          >
            {isPlaying ? (
              <MdPauseCircleOutline size={38} />
            ) : (
              <MdPlayCircleOutline size={38} />
            )}
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={20} />
          </span>
          <span title="Bật phát lại tất cả" className="cursor-pointer flex">
            <IoIosRepeat size={25} />
          </span>
        </div>
        <div>Progress bar</div>
      </div>
      <div className="w-[30%] flex-auto">Volume</div>
    </div>
  );
};

export default Player;
