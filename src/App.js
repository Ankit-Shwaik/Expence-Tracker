import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home/Home";
import "./App.css";
import Daily from "./Component/Daily/Daily";
import Weekly from "./Component/Weekly/Weekly";
import Monthly from "./Component/Monthly/Monthly";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/monthly" element={<Monthly />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
