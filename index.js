const express = require('express')
const userRouter = require('./routes/userRouter')
const db = require('./config/mongoConfig')
const app = express()

const PORT = 4000

app.set('view engine','ejs')
app.set('views','templates')


app.use(express.json())
app.use(express.urlencoded())

app.use(userRouter)



app.listen(PORT,(err)=>{
    if(err)
        console.log("ERROR",err)
    console.log(`Server listening at http://localhost:${PORT}`)
})