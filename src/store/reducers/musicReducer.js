// musicReducer: Lưu những cái state, biến có giá trị thông tin của app(VD: màu sắc, ....)
import actionTypes from "../actions/actionTypes";

const initState = {
  curSongId: null,
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG:
      return {
        ...state,
        curSongId: action.sid || null,
      };

    default:
      return state;
  }
};

export default musicReducer;
