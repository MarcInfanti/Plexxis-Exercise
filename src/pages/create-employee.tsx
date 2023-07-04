import React, { FC } from "react";
import { Link } from "react-router-dom";
import CreateForm from "../components/employee-create-form";
import { Box, Button, Typography } from "@mui/material";

const CreateEmployee: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "50px", marginBottom: "10px" }}>
        Create Employee
      </Typography>
      <CreateForm />
      <Button
        component={Link}
        to=".."
        variant="contained"
        size="medium"
        sx={{ fontSize: "25px", marginTop: "10px" }}
      >
        Back to Employees
      </Button>
    </Box>
  );
};

export default CreateEmployee;
