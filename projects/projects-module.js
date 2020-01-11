const db = require("../data/db-config")

async function getProjects() {
    // return db("projects")
    const projects = await db("projects")
    return projects.map((project) => {
        return {...project, completed: project.completed === 1 ? true: false}
    })
}

module.exports = {
    getProjects,
}