const mongoose = require("mongoose")

//connecting monggose database
const MONGO_URL = process.env.MONGO_URL

const connectDatabse = async ()=>{
    await mongoose.connect(MONGO_URL)
    .then(res=>{
        console.log("mongoose databse is connected.")
    }).catch(err=>console.log(err.message))
}

module.exports = connectDatabse