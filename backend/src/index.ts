import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { UserModel } from "./schemes";
import { UserController } from "./controllers"

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});