const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
        trim: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    },


},{timestamps:true});