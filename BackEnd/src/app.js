require("dotenv").config();

const cors = require('cors');

const express = require('express');

const connectDB = require('./config/database.Mongo');

const app = express();

app.use(cors());

app.use(express.json());

const PORT= process.env.PORT || 7777;

app.use("/api/todo", require('./routes/todo.routes'));

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('Failed to connect to the database & Cannot start server:', err.message);
});


// Try Adding Helmet and Rate Limiter and Middleware for Error Handling
// Also can use Validation Libraries like Joi or express-validator