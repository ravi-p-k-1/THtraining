import express from "express";
import client from "./Db.js";
import models from './models/index.js'
import { Sequelize } from "sequelize";

const app = express();

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});

models(client);

// client.models.User.create({ email: 'ravi@gmail.com', password: 'helelele'});

// const data = await client.models.User.findAll();

// data[0].firstName='kushal';
// data[0].save();

// data.forEach((d,i,arr)=>{
//     d.destroy();
// })




