import { Box, Button, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import EmployeeTable, { Employee } from "../components/employee-data-table";
import { Link } from "react-router-dom";

async function fetchEmployees(): Promise<Employee[]> {
  return await fetch(`http://localhost:8080/api/employees`).then((response) =>
    response.json()
  );
}

const EmployeeList: FC = () => {
  const [rows, setRows] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees()
      .then((data) => setRows(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: "20px", fontSize: 50 }}>
        Employee Table
      </Typography>
      <EmployeeTable rows={rows} />
      <Button
        component={Link}
        to="create"
        variant="contained"
        size="medium"
        sx={{ paddingTop: "10px", fontSize: 25, marginTop: "10px" }}
      >
        Create New Employee
      </Button>
    </Box>
  );
};

export default EmployeeList;
