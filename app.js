const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const connectDB = require('./db/connect');

const port = 5001;

// middleware
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
    res.send("Hello")
})

app.use('/api/v1/tasks', taskRoutes)

const start = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log("Server is listening....");
        })
    } catch (e) {
        console.log(e);
    }
}

start();