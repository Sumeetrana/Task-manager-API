const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");

const port = 5001;

// middleware
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
    res.send("Hello")
})

app.use('/api/v1/tasks', taskRoutes)

app.listen(port, () => {
    console.log("Server is listening....");
})