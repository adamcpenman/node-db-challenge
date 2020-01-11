const db = require("../data/db-config")

async function getTasks() {
    // return db("tasks")
    const tasks = await db("tasks")
    return tasks.map((task) => {
        return {...task, completed: resource.completed === 1 ? true: false}
    })
}

module.exports = {
    getTasks,
}