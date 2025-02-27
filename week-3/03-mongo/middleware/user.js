const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const existingUser = User.findOne({ username, password });
  if (!existingUser) return res.send(404, { message: "User not found" });
  next();
}

module.exports = userMiddleware;
