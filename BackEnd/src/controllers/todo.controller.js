// THis is the Controller for Handling the Logic and Interactions with the Todo Model

const TodoModel = require('../models/todo.model.js');


const createTodo = (req, res) => {

    const todo=res.body;

    try{
        const newTodo=new TodoModel(todo);
        newTodo.save();
        res.status(201).json({message:"Todo Created Successfully",data:newTodo});
    }catch(e){
        res.status(500).json({message:"Failed to create Todo",error:e.message});
    }
}

const getAllTodos = (req, res) => {

}

const getTodoById = (req, res) => {

}


const updateTodo = (req, res) => {


}

const deleteTodo = (req, res) => {


}

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};