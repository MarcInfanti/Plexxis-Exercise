import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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

interface EmployeeInfoProps {
  data: Employee;
}

export default function EmployeeForm({ data }: EmployeeInfoProps) {
  const navigate = useNavigate();

  const [name, setName] = useState(data.name);
  const [code, setCode] = useState(data.code);
  const [profession, setProfession] = useState(data.profession);
  const [color, setColor] = useState(data.color);
  const [city, setCity] = useState(data.city);
  const [branch, setBranch] = useState(data.branch);
  const [assigned, setAssigned] = useState(data.assigned);

  useEffect(() => {
    setName(data.name);
    setCode(data.code);
    setProfession(data.profession);
    setColor(data.color);
    setCity(data.city);
    setBranch(data.branch);
    setAssigned(data.assigned);
  }, [data]);

  const update = () => {
    const updatedEmployee = {
      ...data,
      name,
      code,
      profession,
      color,
      city,
      branch,
      assigned,
    };

    //PUT request with the updated employee data
    fetch(`http://localhost:8080/api/employee/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        console.log(updatedData); //print successfully updated data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteEmployee = () => {
    //DELETE request to delete the employee
    fetch(`http://localhost:8080/api/employee/${data.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((deletedEmployee) => {
        console.log(deletedEmployee); //print deleted employee data
        navigate("/employees"); //redirect to previous page
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": { marginBottom: "10px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="employee-id"
        label="id (Read Only)"
        value={`${data.id}`}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={(n) => setName(n.target.value)}
      />
      <TextField
        required
        id="code"
        label="Code"
        value={code}
        onChange={(c) => setCode(c.target.value)}
      />
      <TextField
        required
        id="profession"
        label="Profession"
        value={profession}
        onChange={(p) => setProfession(p.target.value)}
      />
      <TextField
        required
        id="color"
        label="Color"
        value={color}
        onChange={(c) => setColor(c.target.value)}
        helperText="* Will be converted to HEX color code"
      />
      <TextField
        required
        id="city"
        label="City"
        value={city}
        onChange={(c) => setCity(c.target.value)}
      />
      <TextField
        required
        id="branch"
        label="Branch"
        value={branch}
        onChange={(b) => setBranch(b.target.value)}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              id="assigned"
              checked={assigned}
              onChange={(a) => setAssigned(a.target.checked)}
            />
          }
          label="Assigned"
        />
      </FormGroup>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <Button
          variant="contained"
          onClick={update}
          sx={{ marginRight: "5px" }}
        >
          Update Employee
        </Button>
        <Button variant="contained" onClick={deleteEmployee}>
          Delete Employee
        </Button>
      </Box>
    </Box>
  );
}
