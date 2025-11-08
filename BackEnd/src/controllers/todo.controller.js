// THis is the Controller for Handling the Logic and Interactions with the Todo Model

const TodoModel = require('../models/todo.model.js');


const createTodo = async (req, res) => {

    const {task}=req.body;
    if(!task){
        return res.status(400).json({message:"Task is required"});
    }

    try{
        const newTodo=new TodoModel({task});
        await newTodo.save();
        res.status(201).json({message:"Todo Created Successfully",data:newTodo});
    }catch(e){
        res.status(500).json({message:"Failed to create Todo",error:e.message});
    }
}

const getAllTodos = async (req, res) => {
    try{
        const allTodo= await TodoModel.find();
        res.status(200).json({message:"All Todos Fetched Successfully",data:allTodo});
    }catch(e){
        res.status(500).json({message:"Failed to fetch Todos",error:e.message});
    }
}

const getTodoById = async (req, res) => {
    try{
        const id=req.params.id;
        const todo= await TodoModel.findById(id);

        if(!todo){
            return res.status(404).json({message:"Todo Not Found"});
        }

        res.status(200).json({message:"Todo Fetched Successfully",data:todo});
    }catch(e){
        res.status(500).json({message:"Failed to fetch Todo",error:e.message});
    }

}


const updateTodo = async (req, res) => {
    const id=req.params.id;
    const {task,isCompleted}=req.body;

    if(!task && isCompleted===undefined){
        return res.status(400).json({message:"Atleast one field (task or isCompleted) is required to update"});
    }
    
    if(isCompleted!==undefined && typeof isCompleted !=="boolean"){
        return res.status(400).json({message:"isCompleted must be a boolean"});
    }

    if(isCompleted===undefined){
        isCompleted=false;
    }

    try{
        const updatedTodo= await TodoModel.findByIdAndUpdate(id,{task,isCompleted},{new:true});
        
        if(!updatedTodo){
            return res.status(404).json({message:"Todo Not Found"});
        }

        res.status(200).json({message:"Todo Updated Successfully",data:updatedTodo});
    }catch(e){
        res.status(500).json({message:"Failed to update Todo",error:e.message});
    }


}

const deleteTodo = async (req, res) => {
    const id=req.params.id;
    try{
        const deletedTodo= await TodoModel.findByIdAndDelete(id);
        
        if(!deletedTodo){
            return res.status(404).json({message:"Todo Not Found"});
        }

        res.status(200).json({message:"Todo Deleted Successfully",data:deletedTodo});
    }catch(e){
        res.status(500).json({message:"Failed to delete Todo",error:e.message});
    }


}

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};