import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/root";
import HomePage from "./pages/homepage";
import EmployeeList from "./pages/employees-list";
import EmployeeInfo from "./pages/employee-info";
import PageNotFound from "./pages/page-not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employees">
        <Route path="" element={<RootLayout />}>
          <Route path="" element={<EmployeeList />} />
          <Route path=":id" element={<EmployeeInfo />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
