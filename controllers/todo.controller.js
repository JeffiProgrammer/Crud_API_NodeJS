
import { Todo } from "../models/todo.model.js";




// All CRUD API's
// Create a todo
export const createTodo = async (req, res) => {
    try {
      const detailedTodo = req.body;
      const response = await Todo.create(detailedTodo);
      res.send({
        success: true,
        message: "Todo created successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        message: "Todo creation failed",
        data: null,
      });
    }
  };
  
  // Get all todos
  export const getAllTodos = async (req, res) => {
    try {
      const response = await Todo.find();
      res.send({
        success: true,
        message: "Todos fetched successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        message: "Error fetching todos",
        data: null,
      });
    }
  };
  
  // Get a single todo by ID
  export const getTodoById = async (req, res) => {
    try {
      const { todoId } = req.params;
      const response = await Todo.findById(todoId);
      res.send({
        success: true,
        message: "Todo fetched successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        message: "Error fetching todo",
        data: null,
      });
    }
  };
  
  // Update a todo (You can add logic for this)
  export const updateTodo = async (req, res) => {
    try {
      const { todoId } = req.params;
      const updatedData = req.body;
      const response = await Todo.findByIdAndUpdate(todoId, updatedData, { new: true });
      res.send({
        success: true,
        message: "Todo updated successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        message: "Error updating todo",
        data: null,
      });
    }
  };
  
  // Delete a todo (You can add logic for this)
  export const deleteTodo = async (req, res) => {
    try {
      const { todoId } = req.params;
      await Todo.findByIdAndDelete(todoId);
      res.send({
        success: true,
        message: "Todo deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        message: "Error deleting todo",
      });
    }
  };
