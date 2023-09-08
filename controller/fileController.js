//file model importing
const Files = require('../model/fileModel')
const fs = require('fs')

//index 
const index = async (req, res)=>{
    return res.render('index.pug')
}
const upload = async (req, res) =>{
    return res.render('fileUpload.pug')
}


//api
const fileUpload = async(req, res)=>{
    try {
        const formdata = req.file //file is a builtin keyword
        let fileExist = await Files.findOne({originalname: formdata.originalname})
        if(fileExist){
            //delete file in docs
            fs.unlinkSync(formdata.path)
            return res.status(400).json({msg:`file is already exists.`})
        }
        const newFile = await Files.create(formdata)
        res.status(200).json({newFile})
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}
const fileRead = async (req, res)=>{
try{
    let allFiles = await Files.find()

    res.status(200).json({length:allFiles.length, allFiles})
} catch (error){
    return res.status(500).json({msg:error})
}
}
const fileDelete = async(req, res)=>{
    try{
        var id = req.params.id
        const existId = await Files.findById({_id: id})
        if(!existId){
            return res.status(404).json({msg:"requested is is not exists."})
        }
        fs.unlinkSync(existId.path)
        await Files.findByIdAndDelete({_id: id})
        res.status(200).json({msg:"file deleted successfully."})
    } catch (error){
        return res.status(500).json({msg:error, id})
    }
}




const pnf = async (req, res) =>{
    res.render('pnf.pug')
}

module.exports = {index, upload, pnf, fileUpload, fileRead, fileDelete}

//1