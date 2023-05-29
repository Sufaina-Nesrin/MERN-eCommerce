const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db')
const userRoute = require('./routes/userRoute.js')
const adminRoute = require('./routes/adminRoute')


const app = express()
dotenv.config()
connectDb()

app.use(express.json())
app.use('/api/user', userRoute)
app.use('/api/admin', adminRoute)

// app.use('/',(req,res)=>{
//     res.send('hey its working')
// })


app.listen(8000, ()=>{
    console.log('backend server is running')
})