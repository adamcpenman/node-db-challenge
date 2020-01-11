const express = require('express')

const Projects = require("./projects-module")

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get Projects"})
        })
})

router.post('/', (req, res) => {
    const projectData = req.body

    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch (err => {
            res.status(500).json({ message: "Failed to create new projects"})
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasks(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({ err: "Failed to get tasks"})
        })
})

module.exports = router;