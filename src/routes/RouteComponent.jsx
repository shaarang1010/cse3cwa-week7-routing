import React from "react";

import { Routes, Route } from "react-router-dom";
import First from "../pages/First";
import HistoryExample from "../pages/HistoryExample";
import PokemonComponent from "../pages/Pokemon";
import Second from "../pages/Second";
import Third from "../pages/Third";
const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/first" element={<First pageName={"First"} />} />
      <Route path="/second" element={<Second pageName={"Second"} />} />
      <Route path="/third" element={<Third pageName={"Third"} />} />
      <Route path="/history-example" element={<HistoryExample />} />
      <Route path="/pokemon/:id" element={<PokemonComponent />} />
      {/* <Route path="/" exact element={<App />} /> */}
    </Routes>
  );
};

export default RouterComponent;
