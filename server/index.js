const express = require("express");
const cors = require("cors");
const app = express();
const employees = require("./data/employees.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

//color code validation
function isValidColor(color) {
  const regex = /^#([0-9A-Fa-f]{6})$/;
  return regex.test(color);
}

const colorMap = {
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#00FF00",
  blue: "#0000FF",
  purple: "#800080",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  gray: "#808080",
  black: "#000000",
  white: "#FFFFFF",
};

//GET ALL EMPLOYEES

app.get("/api/employees", (req, res, next) => {
  console.log("GET /api/employees");

  try {
    //return employees array
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

//GET EMPLOYEE BY ID

app.get("/api/employee/:id", (req, res, next) => {
  console.log("GET /api/employee/:id");

  try {
    //find employee matching request id
    const id = parseInt(req.params.id);
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      //return matching employee
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

//CREATE EMPLOYEE

app.post("/api/employee/create", (req, res, next) => {
  console.log("POST /api/employee/create");

  try {
    //create new employee from request json data
    const newEmployee = req.body;

    //check for all fields
    const requiredFields = [
      "name",
      "code",
      "profession",
      "color",
      "city",
      "branch",
      "assigned",
    ];
    for (const field of requiredFields) {
      if (!newEmployee.hasOwnProperty(field)) {
        res.status(400).json({ error: `Missing required field: ${field}` });
        return;
      }
    }

    //data type validation
    if (typeof newEmployee.name !== "string") {
      res.status(400).json({ error: "Invalid name type" });
      return;
    }
    if (typeof newEmployee.code !== "string") {
      res.status(400).json({ error: "Invalid code type" });
      return;
    }
    if (typeof newEmployee.profession !== "string") {
      res.status(400).json({ error: "Invalid profession type" });
      return;
    }
    if (typeof newEmployee.color !== "string") {
      res.status(400).json({ error: "Invalid color type" });
      return;
    }
    if (typeof newEmployee.city !== "string") {
      res.status(400).json({ error: "Invalid city type" });
      return;
    }
    if (typeof newEmployee.branch !== "string") {
      res.status(400).json({ error: "Invalid branch type" });
      return;
    }
    if (typeof newEmployee.assigned !== "boolean") {
      res.status(400).json({ error: "Invalid assigned type" });
      return;
    }

    //convert color to hexadecimal if its a valid color name
    const lowercaseColor = newEmployee.color.toLowerCase();
    if (colorMap.hasOwnProperty(lowercaseColor)) {
      newEmployee.color = colorMap[lowercaseColor];
    } else if (!isValidColor(newEmployee.color)) {
      res.status(400).json({ error: "Invalid color" });
      return;
    }

    //find the highest id in the existing employees
    let maxId = 0;
    for (const employee of employees) {
      if (employee.id > maxId) {
        maxId = employee.id;
      }
    }
    newEmployee.id = maxId + 1; //assign unique id

    //add new employee to array (non-persisting)
    employees.push(newEmployee);

    //return added employee data
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(newEmployee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

//UPDATE EMPLOYEE BY ID

app.put("/api/employee/:id", (req, res, next) => {
  console.log("PUT /api/employee/:id");

  try {
    //find employee matching request id
    const id = parseInt(req.params.id);
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      //update values if provided, otherwise keep existing values
      const employee = employees[index],
        currentColor = employees[index].color;

      employee.name = req.body.name || employee.name;
      employee.code = req.body.code || employee.code;
      employee.profession = req.body.profession || employee.profession;
      employee.color = req.body.color || employee.color;
      employee.city = req.body.city || employee.city;
      employee.branch = req.body.branch || employee.branch;
      employee.assigned =
        req.body.assigned !== undefined ? req.body.assigned : employee.assigned;

      //convert color to hexadecimal if its a valid color name
      const lowercaseColor = employee.color.toLowerCase();
      if (colorMap.hasOwnProperty(lowercaseColor)) {
        employee.color = colorMap[lowercaseColor];
      } else if (!isValidColor(employee.color)) {
        employee.color = currentColor;
      }

      //return updated employee data
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(employees[index]);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

//DELETE EMPLOYEE BY ID

app.delete("/api/employee/:id", (req, res, next) => {
  console.log("DELETE /api/employee/:id");

  try {
    //find employee matching request id
    const id = parseInt(req.params.id);
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      //delete matching employee
      const employee = employees.splice(index, 1);

      //return deleted employee data (for verification)
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(employee[0]);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(8080, () => console.log("Job Dispatch API running on port 8080!"));
