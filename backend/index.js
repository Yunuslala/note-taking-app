const express=require('express');
const { connection } = require('./config/db');
const {UserRouter}=require("./routers/User.Router");
const errorMiddleware=require("./middlewares/Error");
const app=express();
const cors=require("cors");
const { NoteRouter } = require('./routers/Note.Router');


process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log("shutting down server due to Uncaught Exception");
    process.exit(1);
})


app.use(express.json());
app.use(cors());
app.use('/api',UserRouter);
app.use('/api',NoteRouter);



app.use(errorMiddleware)
const server=app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log("db is not connected",error)
    }
    console.log(`http://localhost:${process.env.port}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log("shutting down server due to unhandled promise rejection")

    server.close(()=>{
        process.exit(1)
    })
})