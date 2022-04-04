import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Community from "./app/pages/Community";
import Entry from "./app/pages/Entry";
import Farm from "./app/pages/Farm";
import Home from "./app/pages/Home";
import Login from "./app/pages/Login";
import OneFarmItem from "./app/pages/OneFarmItem";
import Register from "./app/pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="community" element={<Community />} />
      <Route path="farm" element={<Farm />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="entry" element={<Entry />} />
      <Route path="farmitem">
        <Route index element={<OneFarmItem />} />
        <Route path=":id" element={<OneFarmItem />} />
      </Route>
    </Routes>
  );
}

export default App;
