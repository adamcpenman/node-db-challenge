const db = require("../data/db-config")

async function getResources() {
    // return db("resources")
    const resources = await db("resources")
    return resources.map((resource) => {
        return {...resource, completed: resource.completed === 1 ? true: false}
    })
}

async function addResource(resourceData) {
    await db("resources")
            .insert(resourceData)
            .then( resource => {
                return resource
            })
}

module.exports = {
    getResources,
    addResource,
}