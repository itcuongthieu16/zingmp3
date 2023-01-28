// musicReducer: Lưu những cái state, biến có giá trị thông tin của app(VD: màu sắc, ....)
import actionTypes from "../actions/actionTypes";

const initState = {
  curSongId: null,
  isPlaying: false,
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG:
      return {
        ...state,
        curSongId: action.sid || null,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    default:
      return state;
  }
};

export default musicReducer;
