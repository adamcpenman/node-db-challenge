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

async function getPR_RE(id) {
    const re = await db("resources as r")
        .join("pr_re as pr", "r.id", "pr.resource_id")
        .join("projects as p", "pr.project_id", "p.id")
        .where({ "pr.project_id": id })
        .select("pr.resource_id", "pr.project_id")
    return re;
}

module.exports = {
    getResources,
    addResource,
    getPR_RE,
}