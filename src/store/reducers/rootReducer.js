// rootReducer: Gom lại tất cả reducer làm thành 1
import appReducer from "./appReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import musicReducer from "./musicReducer";

const commonoConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const musicConfig = {
  ...commonoConfig,
  key: "music",
  whilelist: ["curSongId"], //Những cái thằng mà mình muốn lưu, [''] viết những cái key mà mình muốn lưu dưới local
};

const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(musicConfig, musicReducer),
});

export default rootReducer;
