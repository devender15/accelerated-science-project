import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import { Sidebar } from "../../components";

export default function Routing() {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    </>
  );
}
