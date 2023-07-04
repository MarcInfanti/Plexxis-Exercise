# Plexxis-Exercise

Repository for Plexxis Interview Exercise

## Description

This repository contains a simple CRUD (Create, Read, Update, Delete) application. It consists of three main pages that interact with the back-end API.

The application utilizes five different API endpoints to perform CRUD operations on employees. Please note that the changes made in the application are not persisted between sessions.

Data is loaded dynamically from the back-end API, ensuring that the displayed data is always up to date.

The back-end performs data validation and manipulation with specific requests and returns accurate error codes. It is also built to avoid crashes.

## Languages and Packages Used

- Front-end: TypeScript, React, React Router DOM
- Back-end: Javascript, Node.js, Express

## API Endpoints

1. **GET /api/employees**

   - Retrieves all employees.
   - Response: Array of employee objects (JSON).

2. **GET /api/employee/:id**

   - Retrieves an employee by their ID.
   - Request parameter: Employee ID.
   - Response: Employee object (JSON).

3. **POST /api/employee/create**

   - Creates a new employee.
   - Request body: Employee object with the following required fields:
     - name
     - code
     - profession
     - color
     - city
     - branch
     - assigned
   - Response: Newly created employee object (JSON).

4. **PUT /api/employee/:id**

   - Updates an employee by their ID.
   - Request parameter: Employee ID.
   - Request body: Employee object with the fields to update.
   - Response: Updated employee object (JSON).

5. **DELETE /api/employee/:id**
   - Deletes an employee by their ID.
   - Request parameter: Employee ID.
   - Response: Deleted employee object (JSON).

## Getting Started

To run the application, follow these steps:

1. Install the dependencies by running the following command:
   npm install

2. Start both the front-end and back-end simultaneously on different ports (front: 3000, back: 8080) using the following command:
   npm start

The application will automatically open in your default browser.

## NPM Scripts

- `npm start`: Starts both the front-end and back-end servers simultaneously.
- `npm run start:react-app`: Starts only the front-end server.
- `npm run build`: Builds the front-end application for production.
- `npm test`: Runs tests for the front-end application.
- `npm run eject`: Ejects the front-end application configuration.
