const express = require('express');

const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
  } = require('../controllers/todo.controller.js');


const todoRoute=express.Router();

todoRoute.get("/getAll",getAllTodos);

todoRoute.get("/getTodo/:id",getTodoById);

todoRoute.post("/create",createTodo);

todoRoute.put("/update/:id",updateTodo);

todoRoute.delete("/delete/:id",deleteTodo);

module.exports=todoRoute;
