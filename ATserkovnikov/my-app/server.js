const express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')

const userProxyMiddleware = require('./setupProxy')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/selftest', (req, res) => {
    res.send('Works!')
})

userProxyMiddleware(app)

const httpOptions = {
    key: fs.readFileSync('./cert/server.crt'),
    cert: fs.readFileSync('./cert/server.key')
}

// https.createServer(httpOptions, app).listen(3000, ()=>{
//     console.log('https://localhost:3000')
// })

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
})
