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

module.exports = router;