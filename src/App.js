import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreatePage from "./Components/CreatePage/CreatePage";
import DeletePage from "./Components/DeletePage/DeletePage";
import UpdatePage from "./Components/Update/UpdatePage";

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<CreatePage />}></Route>
      <Route path="/update" element={<UpdatePage />}></Route>
      <Route path="/delete" element={<DeletePage />}></Route>
    </Routes>
  );
};
export default App;
