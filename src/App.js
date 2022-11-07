import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Component/Home/Home";
import { NotFound } from "./Component/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/daily" element={<Daily />} /> */}
          {/* <Route path="/weekly" element={<Weekly />} /> */}
          {/* <Route path="/monthly" element={<Monthly />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
