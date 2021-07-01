/* Add Data */
let data = require("../../data")

/* Read Data from Router */
exports.dataFetch = (req, res) => {
    res.json(data) // Read Data from data.js
}

/* Create New Task from Router */
exports.dataAdd = (req, res) => {
    const id = data.length + 1
    const stat = false
    const newTask = {
        id,
        ...req.body,
        stat
    }
    data.push(newTask)
    res.status(201).json(newTask)
}

/* Update Task from Router */
exports.dataUpdate = (req, res) => {
    const { taskId } = req.params;
    const findTask = data.find(task => task.id === +taskId);
    if (findTask) {
        for (key in req.body) findTask[key] = req.body[key]
        res.status(204).end()
    } else { res.status(404).json({ message: "Didn't find the Task" }) }
}

/* Delete Task from Router */
exports.dataDelete = (req, res) => {
    const { taskId } = req.params;
    const findTask = data.find(task => task.id === +taskId);
    if (findTask) {
        data = data.filter(task => task.id !== findTask.id)
        res.status(204).end()
    } else { res.status(404).json({ message: "Didn't find the Task" }) }
}