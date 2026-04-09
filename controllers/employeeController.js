import fs from "fs";

// Get Employee List
export function getEmployees(req, res) {
  let employees = [];

  if (fs.existsSync("employees.json")) {
    const data = fs.readFileSync("employees.json", "utf-8");
    employees = JSON.parse(data);
  }

  res.render("employees", {
    user: req.session.user,
    employees
  });
}

// Show Add Form Page
export function showAddForm(req, res) {
  res.render("addEmployee", {
    user: req.session.user
  });
}

// Add Employee
export function addEmployee(req, res) {
  const { name, gender, department, salary, startDate, notes, profileImage } = req.body;

  if (!name || !gender || !department || !salary || !startDate) {
    return res.send("All required fields must be filled");
  }

  let employees = [];

  if (fs.existsSync("employees.json")) {
    const data = fs.readFileSync("employees.json", "utf-8");
    employees = JSON.parse(data);
  }

  const newEmployee = {
    id: Date.now(),
    name,
    profileImage,
    gender,
    department: Array.isArray(department) ? department : [department],
    salary: Number(salary),
    startDate,
    notes
  };

  employees.push(newEmployee);

  fs.writeFileSync("employees.json", JSON.stringify(employees, null, 2));

  res.redirect("/employees");
}