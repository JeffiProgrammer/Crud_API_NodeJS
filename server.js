import express from "express";
import dotenv from "dotenv";
import connectToDB from "./database/db.js";
import { getAllTodos , createTodo, getTodoById, updateTodo,deleteTodo } from "./controllers/todo.controller.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());


connectToDB();

// TODO API's
app.post("/api/todos", createTodo);
app.get("/api/todos", getAllTodos);
app.get("/api/todos/:todoId", getTodoById);
app.put("/api/todos/:todoId", updateTodo);
app.delete("/api/todos/:todoId", deleteTodo);

// listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
