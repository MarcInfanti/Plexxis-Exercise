import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeForm, { Employee } from "../components/employee-info-form";
import { Box, Typography, Button } from "@mui/material";

async function fetchEmployee(id: string): Promise<Employee> {
  return await fetch(`http://localhost:8080/api/employee/${id}`).then(
    (response) => response.json()
  );
}

const EmployeeInfo: FC = () => {
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    name: "",
    code: "",
    profession: "",
    color: "",
    city: "",
    branch: "",
    assigned: false,
  });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchEmployee(id)
      .then((data) => setEmployee(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!id) {
    return <div>No employee ID found</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: "20px", fontSize: 50 }}>
        Employee Info
      </Typography>
      <EmployeeForm data={employee} />
      <Button
        component={Link}
        to=".."
        variant="contained"
        size="medium"
        sx={{ marginTop: "10px", fontSize: 25 }}
      >
        Back to Employees
      </Button>
    </Box>
  );
};

export default EmployeeInfo;
