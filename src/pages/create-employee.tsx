import React, { FC } from "react";
import { Link } from "react-router-dom";
import CreateForm from "../components/employee-create-form";
import { Box, Typography } from "@mui/material";

const CreateEmployee: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h1">Employee Info</Typography>
      <CreateForm />
      <Link to="..">Employees</Link>
    </Box>
  );
};

export default CreateEmployee;
