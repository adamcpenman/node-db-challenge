const express = require('express')
const helmet = require('helmet')
const ProjectRouter = require("./projects/projects-router")
const ResourceRouter = require("./resources/resource-router")
const TaskRouter = require("./tasks/tasks-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

module.exports = server