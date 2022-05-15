const mongoose = require('mongoose')


const DB = "mongodb://localhost:27017/bankdb"

mongoose.connect(DB).then(() => {
    console.log("Connection to database successful!")
})


const db = mongoose.connection;



module.exports = db;