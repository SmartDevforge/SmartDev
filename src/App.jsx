import { Route, Routes } from "react-router-dom";
import "./styles.css"
import Home from "./Pages/Home";
import "./App.css"
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default App;
