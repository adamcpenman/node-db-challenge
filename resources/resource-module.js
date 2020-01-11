const db = require("../data/db-config")

async function getResources() {
    // return db("resources")
    const resources = await db("resources")
    return resources.map((resource) => {
        return {...resource, completed: resource.completed === 1 ? true: false}
    })
}

module.exports = {
    getResources,
}