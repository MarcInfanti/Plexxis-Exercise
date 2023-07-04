import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const PageNotFound: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <Typography variant="h1" fontSize={30}>
        Oops! We couldn't find the page you were looking for.
      </Typography>
      <Link to="/">Back to homepage</Link>
    </Box>
  );
};

export default PageNotFound;
