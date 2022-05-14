const express = require('express')

const app = express()

const PORT = 4000




app.listen(PORT,(err)=>{
    if(err)
        console.log("ERROR",err)
    console.log(`Server listening at http://localhost:${PORT}`)
})