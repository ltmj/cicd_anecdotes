const express = require('express')
const server = require('json-server')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/home', server.router('db.json'))

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server started on port: ${PORT}`)
})

app.use((req, res, next) => {
    next()
})

app.get('/health', (req, res) => {
    res.send('ok')
})

app.use(express.static('build'))