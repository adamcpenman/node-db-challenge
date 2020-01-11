const db = require("../data/db-config")

async function getProjects() {
    // return db("projects")
    const projects = await db("projects")
    return projects.map((project) => {
        return {...project, completed: project.completed === 1 ? true: false}
    })
}

async function addProject(projectData) {
    await db("projects")
            .insert(projectData)
            .then( project => {
                return project
            })
}

async function getTasks(id) {
    const [task] = await db("tasks as t")
    // await db("tasks as t")
    .where('t.id', id)
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.project_name', 't.description')
    return { ...task, completed: task.completed === 1 ? true : false }
    }


module.exports = {
    getProjects,
    addProject,
    getTasks,
}