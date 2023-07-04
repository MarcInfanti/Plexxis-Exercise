import { Box, Typography } from "@mui/material";
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
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "20px" }}>
      <Typography variant="h1" sx={{ marginBottom: "20px" }}>
        Employee Table
      </Typography>
      <EmployeeTable rows={rows} />
      <Link to="create">Create New Employee</Link>
    </Box>
  );
};

export default EmployeeList;
