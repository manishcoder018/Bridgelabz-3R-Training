import express from "express";
import fs from "fs";
import isAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

/* =========================
   GET Dashboard Employees
========================= */

router.get("/dashboard", isAuthenticated, (req, res) => {

  let employees = [];

  if (fs.existsSync("employees.json")) {
    employees = JSON.parse(fs.readFileSync("employees.json", "utf-8"));
  }

  res.render("employees", { employees });
});


/* =========================
   SHOW Add Employee Form
========================= */

router.get("/employees/add", isAuthenticated, (req, res) => {
  res.render("addEmployee");
});


/* =========================
   SAVE Employee
========================= */

router.post("/employees/add", isAuthenticated, (req, res) => {

  const { name, gender, department, salary } = req.body;

  let employees = [];

  if (fs.existsSync("employees.json")) {
    employees = JSON.parse(fs.readFileSync("employees.json", "utf-8"));
  }

  const newEmployee = {
    id: Date.now(),
    name,
    gender,
    department: Array.isArray(department) ? department : [department],
    salary
  };

  employees.push(newEmployee);

  fs.writeFileSync("employees.json", JSON.stringify(employees, null, 2));

  res.redirect("/dashboard");
});


/* =========================
   DELETE Employee
========================= */

router.get("/employees/delete/:id", isAuthenticated, (req, res) => {

  const id = parseInt(req.params.id);

  if (!fs.existsSync("employees.json")) {
    return res.redirect("/dashboard");
  }

  let employees = JSON.parse(fs.readFileSync("employees.json", "utf-8"));

  employees = employees.filter(emp => emp.id !== id);

  fs.writeFileSync("employees.json", JSON.stringify(employees, null, 2));

  res.redirect("/dashboard");
});

export default router;

/* =========================
   SHOW Edit Page
========================= */

router.get("/employees/edit/:id", isAuthenticated, (req, res) => {

  const id = parseInt(req.params.id);

  let employees = JSON.parse(fs.readFileSync("employees.json", "utf-8"));

  const employee = employees.find(emp => emp.id === id);

  res.render("editEmployee", { employee });
});


/* =========================
   UPDATE Employee
========================= */

router.post("/employees/edit/:id", isAuthenticated, (req, res) => {

  const id = parseInt(req.params.id);
  const { name, gender, department, salary } = req.body;

  let employees = JSON.parse(fs.readFileSync("employees.json", "utf-8"));

  employees = employees.map(emp => {
    if (emp.id === id) {
      return {
        ...emp,
        name,
        gender,
        department: Array.isArray(department) ? department : [department],
        salary
      };
    }
    return emp;
  });

  fs.writeFileSync("employees.json", JSON.stringify(employees, null, 2));

  res.redirect("/dashboard");
});