const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')

// config
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())

// route
app.get(`${config.PATH}/ok`, (req, res) => {
    res.send("ok")
})

// error catch
process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
    });

// listen
app.listen(config.PORT, () => { console.log(`Server Running at ${config.PORT}`) });