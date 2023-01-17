// rootReducer: Gom lại tất cả reducer làm thành 1
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
