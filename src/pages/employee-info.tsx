import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeeForm, {Employee} from '../components/employee-info-form'
import { Box, Typography } from '@mui/material';

async function fetchEmployee(id: string): Promise<Employee> {
  return await fetch(`http://localhost:8080/api/employee/${id}`).then(response => response.json());
}

const EmployeeInfo: FC = () => {
  const [employee, setEmployee] = useState<Employee>({ id: 0, name: '', code: '', profession: '', color: '', city: '', branch: '', assigned: false });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchEmployee(id)
      .then(data => setEmployee(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!id) {
    return <div>No employee ID found</div>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h1">
        Employee Info
      </Typography>
      <EmployeeForm data={employee} />
      <Link to="..">Employees</Link>
    </Box>
  )
}

export default EmployeeInfo
