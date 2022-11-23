import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { Page4 } from "./components/Page4";
import { Page5 } from "./components/Page5";
import { Page6 } from "./components/Page6";
import { Page7 } from "./components/Page7";
import { Page8 } from "./components/Page8";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
