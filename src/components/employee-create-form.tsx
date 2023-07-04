import React, { useState } from "react";
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

const defaultData: Employee = {
  id: 0,
  name: "",
  code: "",
  profession: "",
  color: "",
  city: "",
  branch: "",
  assigned: false,
};

export default function CreateForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Employee>(defaultData);

  const clearForm = () => {
    setFormData(defaultData);
  };

  const createEmployee = () => {
    // POST request to create a new employee
    fetch("http://localhost:8080/api/employee/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((createdEmployee) => {
        console.log(createdEmployee); // print created employee data
        navigate("/employees"); // redirect to employees page
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          marginBottom: "5px",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="name"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <TextField
        required
        id="code"
        label="Code"
        name="code"
        value={formData.code}
        onChange={handleInputChange}
      />
      <TextField
        required
        id="profession"
        label="Profession"
        name="profession"
        value={formData.profession}
        onChange={handleInputChange}
      />
      <TextField
        required
        id="color"
        label="Color"
        name="color"
        value={formData.color}
        onChange={handleInputChange}
        helperText="* Will be converted to HEX color code"
      />
      <TextField
        required
        id="city"
        label="City"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
      <TextField
        required
        id="branch"
        label="Branch"
        name="branch"
        value={formData.branch}
        onChange={handleInputChange}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              id="assigned"
              name="assigned"
              checked={formData.assigned}
              onChange={handleInputChange}
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
          onClick={clearForm}
          sx={{ marginRight: "5px" }}
        >
          Clear Form
        </Button>
        <Button variant="contained" onClick={createEmployee}>
          Create Employee
        </Button>
      </Box>
    </Box>
  );
}
