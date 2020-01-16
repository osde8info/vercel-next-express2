const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>ZEIT NODE EXPRESS</h1>
        <h2>Go to <a href="/about">/about</a></h2>
    `)
})

module.exports = app
