require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const signupRoute = require("./src/routes/signup.route");
const loginRoute = require("./src/routes/login.route");
const middleware = require("./src/controllers/middleware");


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/signup", signupRoute);
app.use("/login", loginRoute);

app.use(middleware);


app.listen(PORT, async () => {
  await connectDB();
  console.log(`Listening to http://localhost:${PORT}`);
});
