//index 
const index = async (req, res)=>{
    return res.render('index.pug')
}
const upload = async (req, res) =>{
    res.render('fileUpload.pug')
}
const pnf = async (req, res) =>{
    res.render('pnf.pug')
}

module.exports = {index, upload, pnf}

//1