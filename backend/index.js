import express from 'express';
import dotenv from 'dotenv';
import ConnectionMongo from './mongo_Connection.js';
import userRoutes from './Routes/userRoutes.js';

dotenv.config();

const app=express();
const port=process.env.port
app.use(express.json());

ConnectionMongo();

app.use('/api/v1/user',userRoutes)
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})

