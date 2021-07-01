/* import  Libraries */
const express = require("express")
const cors = require("cors");
const taskRoutes = require('./API/task/routes')
const app = express();

/* Middleware */
app.use(cors());

app.use(express.json());

app.use("/task", taskRoutes)

/* Localhost listen */
app.listen(8000, () => {
    console.log("The application is running on localhost:8000")
});