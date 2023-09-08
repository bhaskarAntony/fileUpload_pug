const fileRoute = require('express').Router()
const{index, upload, pnf, fileUpload, fileRead, fileDelete} = require('../controller/fileController')

//importing middleware
const fileConfig = require('../middleware/upload')
fileRoute.get(`/`, index)
fileRoute.get(`/file/upload`, upload)

//creating api paths
fileRoute.post('/api/files/file/new',fileConfig, fileUpload)
fileRoute.get('/api/files/all', fileRead)
fileRoute.delete('/api/files/file/delete/:id', fileDelete)

//default route
fileRoute.get(`/*`, pnf)
module.exports = fileRoute

//2