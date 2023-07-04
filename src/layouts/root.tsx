import React, { FC } from "react";
import { Outlet, Link } from "react-router-dom";

const RootLayout: FC = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#708090",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ fontSize: "30px" }}>
          Plexxis Demo App
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
