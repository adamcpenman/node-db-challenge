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

module.exports = router;