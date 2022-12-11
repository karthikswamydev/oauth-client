import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";

const Router = () => {
  const user = false;
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route
        path="/"
        exact
        element={user ? <Navigate to="/" /> : <Login />}
      ></Route>
    </Routes>
  );
};

export default Router;
