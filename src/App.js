import { useSelector, useDispatch } from "react-redux";

function App() {
  const { test, homeData } = useSelector((state) => state.app);

  return <div className="App">App</div>;
}

export default App;
