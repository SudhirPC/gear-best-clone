const mongoose = require('mongoose')

const connect=()=>{
    return mongoose.connect("mongodb+srv://Sudhir777:Sudhir777@cluster0.33m3wsr.mongodb.net/gearbest")
}
module.exports= connect