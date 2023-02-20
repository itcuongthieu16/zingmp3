import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../untils/icons";
import * as actions from "../store/actions";
import { duration } from "moment";

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
var intervalId;
const Player = () => {
  const { curSongId, isPlaying } = useSelector((state) => state.music);

  const [songInfo, setSongInfo] = useState(null);
  const [audio, setAudio] = useState(new Audio());

  const thumbRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId),
      ]);

      console.log({ res1: res1 });
      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }

      if (res2.data.err === 0) {
        audio.pause();
        setAudio(new Audio(res2.data.data["128"]));
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    if (isPlaying) {
      intervalId = setInterval(() => {
        let percent =
          Math.round((audio.currentTime / songInfo.duration) * 10000) / 100;
        thumbRef.current.style.cssText = `right: ${100 - percent}%`;
      }, 200);
    } else {
      intervalId && clearInterval(intervalId);
    }
  }, [isPlaying]);

  useEffect(() => {
    audio.pause();
    audio.load();
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio]);

  const handleTogglePlayMusic = () => {
    if (isPlaying) {
      // console.log("Pause");
      audio.pause();
      dispatch(actions.play(false));
    } else {
      // console.log("Play");
      audio.play();
      dispatch(actions.play(true));
    }
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
            {isPlaying ? <BiPause size={38} /> : <BiPlay size={38} />}
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={20} />
          </span>
          <span title="Bật phát lại tất cả" className="cursor-pointer flex">
            <IoIosRepeat size={25} />
          </span>
        </div>
        <div className="w-full">
          <div className="w-3/4 m-auto relative h-[3px] bg-[rgba(0,0,0,0.1)] rounded-l-full rounded-r-full">
            <div
              ref={thumbRef}
              className="absolute top-0 left-0 h-[3px] bg-[#0e8080] rounded-l-full rounded-r-full"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex-auto">Volume</div>
    </div>
  );
};

export default Player;
