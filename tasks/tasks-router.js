const express = require('express')

const Tasks = require("./tasks-module")

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get tasks"})
        })
})

module.exports = router;