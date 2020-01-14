const db = require("../data/db-config")

async function getTasks() {
    // return db("tasks")
    const tasks = await db("tasks")
    return tasks.map((task) => {
        return {...task, completed: task.completed === 1 ? true: false}
    })
}

async function addTask(taskData) {
    await db("tasks")
            .insert(taskData)
            .then( task => {
                return task
            })
}

module.exports = {
    getTasks,
    addTask
}