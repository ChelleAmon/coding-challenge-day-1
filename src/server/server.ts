import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import { UserModel } from "./schemas/user.schema.js";

const app = express();

mongoose
  .connect('mongodb://localhost:27017/coding-challenge')
.then(() => {
    console.log('Connected to DB Successfully');
})
.catch(err => console.log('Failed to Connect to DB', err))

app.use(express.json())

app.get('/', function(req, res) {
  console.log('app')
  res.json({test: 'tes2'})
});


app.post('/create-user', function(req,res){
  const  {first_name, last_name, age} = req.body;
  const user = new UserModel({
    first_name, 
    last_name, 
    age
  })
  user.save()
  .then(() => res.json(user))
  .catch((err) => res.status(501).json(err) )
})



app.listen(3333, function() {
  console.log(`running on http://localhost:3333`)
}) 


