import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment/moment";

const Album = () => {
  const { title, pid } = useParams();
  // console.log({
  //     title: title,
  //     pid: pid
  // });

  const [playlistData, setPlayListData] = useState({});

  useEffect(() => {
    const fetchDetailPlayList = async () => {
      const response = await apis.apiGetDetailPlaylist(pid);
      console.log(response);

      if (response?.data.err === 0) {
        setPlayListData(response.data?.data);
      }
    };
    fetchDetailPlayList();
  }, [pid]);
  return (
    <div className="flex gap-8 w-full px-[59px]">
      <div className="flex-none w-1/4 flex flex-col items-center gap-2">
        <img
          src={playlistData?.thumbnailM}
          alt="thumbnail"
          className="w-full object-contain rounded-md shadow-md"
        />
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-[20px] font-bold text-gray-800">
            {playlistData.title}
          </h3>
          <span className="flex gap-2 items-center text-gray-500 text-[12px] font-[500]">
            <span>Cập nhật:</span>
            <span>
              {moment
                .unix(playlistData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>
          </span>
          <span className="flex gap-2 items-center text-gray-500 text-[12px] font-[500]">{playlistData?.artistsNames}</span>
          <span className="flex gap-2 items-center text-gray-500 text-[12px] font-[500]">
            {`${Math.round(playlistData.like / 1000)}K người yêu thích`}
          </span>
        </div>
      </div>
      <div className="flex-auto border border-red-500">Playlist</div>
    </div>
  );
};

export default Album;
