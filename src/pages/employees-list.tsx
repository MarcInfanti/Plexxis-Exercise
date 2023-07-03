import { Box, Typography } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import EmployeeTable, { Employee } from '../components/employee-data-table'

async function fetchEmployees(): Promise<Employee[]> {
  return await fetch(`http://localhost:8080/api/employees`).then(response => response.json());
}

const EmployeeList: FC = () => {
  const [rows, setRows] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees()
      .then(data => setRows(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h1">
        Employee Table
      </Typography>
      <EmployeeTable rows={rows} />
    </Box>
  )
}

export default EmployeeList
