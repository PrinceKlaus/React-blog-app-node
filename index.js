const express = require('express')
const NewsData = require('./NewsData')
const cors = require('cors')
const app=express()
app.use(cors({
    origin:"*"
}))

app.get('/api/blogdata',(req,res)=>{
    res.send(NewsData)
})

app.listen(5000,()=>{
    try{
        console.log('server is live at port number 5000')
    }
    catch(err){
        console.log(err,'error occurred')
    }
})