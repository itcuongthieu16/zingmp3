import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Public, Personal, Album } from "./containers/public";
import path from "./untils/path";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHome());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
          <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />


          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
