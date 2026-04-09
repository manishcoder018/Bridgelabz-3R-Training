import fs from "fs";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  try {
    if (!fs.existsSync("user.json")) {
      return res.status(404).send("No users found");
    }

    const { email, password } = req.body;

    const data = fs.readFileSync("user.json", "utf-8");
    const users = JSON.parse(data);

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send("Invalid password");
    }

    req.session.user = user;

    res.redirect("/dashboard");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default loginUser;
