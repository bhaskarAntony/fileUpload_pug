const express = require('express')
const cors = require('cors')
require('dotenv').config()


const PORT = process.env.PORT

const app = express()

app.set(`view engine`, 'pug')
app.set(`views`, './view')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.use(`/`, require('./route/fileRoute'))

app.listen(PORT, ()=>{
    console.log(`server is strated at http://localhost:${PORT}`)
})