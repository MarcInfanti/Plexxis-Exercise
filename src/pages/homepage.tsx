import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

const HomePage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <Typography variant="h1" fontSize={50}>
        Homepage
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Hello! Welcome to my sample CRUD application. <br />
        This is the react front end of the application. It consists of 3 main
        pages that use the back end api, those being the employees list and the
        create/edit employee forms respectively.
        <br />
        This app uses 5 different api endpoints to create, display, update, and
        delete employees. It does not persist changes between sessions.
        <br />
        Data is loaded dynamically from the back end api, and reloaded with
        every page navigation to keep the data displayed up to date.
        <br />
        The back end performs data validation and data manipulation with
        specific requests, and returns accurate error codes. It is also built to
        avoid crashes.
        <br />
        Below is the button to the main employee page. Enjoy!
      </Typography>
      <Button
        component={Link}
        to="../employees"
        variant="contained"
        size="medium"
        sx={{ marginTop: "10px", fontSize: 20 }}
      >
        Employees
      </Button>
    </Box>
  );
};

export default HomePage;
