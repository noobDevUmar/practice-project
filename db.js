const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String
    }
})

const model = mongoose.model("Myhometest",Schema)

module.exports = model
