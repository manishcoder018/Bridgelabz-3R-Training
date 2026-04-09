import express from "express";
import session from "express-session";
import fs from "fs";

import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import isAuthenticated from "./middleware/authMiddleware.js";

const app = express();

/* =========================
   Middlewares
========================= */

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // optional but good

app.set("view engine", "ejs");

/* ✅ STATIC FILES (IMPORTANT) */
app.use(express.static("public"));

/* =========================
   Session Setup
========================= */

app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false
}));

/* =========================
   Routes
========================= */

app.use("/", userRoutes);
app.use("/", employeeRoutes);

/* Dashboard shows employees */
app.get("/dashboard", isAuthenticated, (req, res) => {

  let employees = [];

  if (fs.existsSync("employees.json")) {
    const data = fs.readFileSync("employees.json", "utf-8");
    employees = JSON.parse(data);
  }

  res.render("employees", { employees });
});

/* Default route */
app.get("/", (req, res) => {
  res.redirect("/login");
});

/* =========================
   Server Start
========================= */

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});