import { Route, Routes } from "react-router-dom";
import "./styles.css"
import Home from "./Pages/Home";
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
};

export default App;
