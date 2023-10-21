const express = require('express')
const app=express()

app.listen(5000,()=>{
    try{
        console.log('server is live at port number 5000')
    }
    catch(err){
        console.log(err,'error occurred')
    }
})