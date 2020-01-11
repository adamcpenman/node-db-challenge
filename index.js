const server = require('./server')

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

server.get("/", (req,res) => {
    res.send('<h2>NODE DB SPRINT CHALLENGE - ADAM')
})