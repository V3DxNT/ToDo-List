require("dotenv").config();

const express = require('express');
const connectDB = require('./config/database.Mongo');
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/todo", require('./routes/todo.routes'));

















connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT || 7777}`);
    });
})
.catch((err) => {
    console.log('Failed to connect to the database');
});
