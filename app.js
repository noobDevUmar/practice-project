const express = require("express");
const path = require("path");
const mongoose = require('mongoose')
const model = require('./db')
const app = express();
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.listen(3000,()=>{
    console.log("Server is working ! ")
})
mongoose.connect("mongodb+srv://umer:123@cluster0.nszpwqv.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected")
}).catch((e)=>{console.log("PROBELM")})

app.get('/submitted',(req,res)=>{
res.send("<p> HELLO TIS IS WORKING </p>")
})

app.get('/',(req,res)=>{
   
    res.render('index')
 })


 // PUTTING DATA IN DATABASE
 app.post('/', async (req, res) => {

      const {   email,pass   } = req.body
      console.log({   email,pass   })
  await model.create({ name:email , password:pass });
  //or await model.create({ name:req.body.email , password:req.body.pass });
  res.render('done')
  });




app.use((req,res)=>{
    res.send("<h2>Not FOUND </h2>")
})

