import express from "express";
import { ErrorHandler } from "./ErrorHandler.js";

const app = express();
app.use(express.json());

const port = 5000;

app.use("/register", ErrorHandler, (req, res) => {
  res.status(200).json("User Registered Successfully!");
});

app.listen(port, () => {
  console.log("Server is hosted on port : " + port);
});
