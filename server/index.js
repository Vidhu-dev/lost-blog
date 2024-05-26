import dotenv from 'dotenv/config'
import connectDB from "./db/index.js";
import {app} from './app.js'

connectDB()
    .then(()=>{
       app.on('error', (error)=>{
        console.log(error)
        throw error 
       }) 
       app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server running on Port: ${process.env.PORT}`)
       })
    })
    .catch((err) => {
        console.log('MongoDB connection failed !', err)
    })