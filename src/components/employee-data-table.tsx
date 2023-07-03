import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'

export interface Employee {
  id: number;
  name: string;
  code: string;
  profession: string;
  color: string;
  city: string;
  branch: string;
  assigned: boolean;
}

interface EmployeeTableProps {
  rows: Employee[];
}

export default function EmployeeTable({ rows }: EmployeeTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Profession</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Branch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right"><Link to={`${row.id}`}>{row.name}</Link></TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.profession}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.branch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
