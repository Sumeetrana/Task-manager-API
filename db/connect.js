const mongoose = require("mongoose");

const connectDB = () => {
    return mongoose.connect('mongodb://localhost:27017/tasks')
        .then(() => console.log("Database connection successfull"))
        .catch(e => console.log(e))
}

module.exports = connectDB;

