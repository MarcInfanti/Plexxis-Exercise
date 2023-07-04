import React, { FC } from "react";
import { Outlet, Link } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        fontSize: "30px",
        paddingTop: "10px",
      }}
    >
      <Link to="/">Plexxis Demo App</Link>
      <Outlet />
    </nav>
  );
};

export default RootLayout;
