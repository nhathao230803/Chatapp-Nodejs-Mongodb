// ===== Imports =====
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// import bookRouter from './routes/books.js'
import indexRouter from "./Module/index/index.router.js";
import userRouter from "./Module/user/user.router.js";
import overwriteResponseJSON from "./middlewares/overwriteResponseJSON.js";

// ===== Config =====
const server = express();
const PORT = process.env.PORT || 3000;

// ===== Middlewares =====
server.use(cors());
server.use(bodyParser.json());
server.use(overwriteResponseJSON);

// ===== Routes =====
server.use("/", indexRouter);
server.use("/users", userRouter);

server.listen(PORT, () => {
  console.log(`Server is listening at PORT=${PORT}`);
});
