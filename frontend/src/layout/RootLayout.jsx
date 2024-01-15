import React from "react";
import { Outlet } from "react-router-dom";
import "../reset.css";
import { useCurrentUserContext } from "../contexte/CurrentUserContext";
import Navbar from "../components/navbar/Navbar";
import LogInOut from "../components/logIn-Out/LogInOut";

function RootLayout() {
  const { auth } = useCurrentUserContext();

  const userItem = JSON.parse(localStorage.getItem("user"));
  console.info(auth);
  console.info(userItem);
  return (
    <div>
      <header style={{ position: "relative" }}>
        <Navbar />
        <LogInOut />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
