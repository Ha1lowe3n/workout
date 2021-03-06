import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.PORT} mode on port ${PORT}`.yellow.bold
    )
);
