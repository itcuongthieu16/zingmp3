import actionTypes from "./actionTypes";
import * as apis from "../../apis";

export const setCurSongId = (sid) => ({
  type: actionTypes.SET_CUR_SONG,
  sid
});


export const play = (falg) => ({
  type: actionTypes.PLAY,
  falg
});