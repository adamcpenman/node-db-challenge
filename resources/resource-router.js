const express = require('express')

const Resources = require("./resource-module")

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get resources"})
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body

    Resources.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch (err => {
            res.status(500).json({ message: "Failed to create new resources"})
        })
})

module.exports = router;