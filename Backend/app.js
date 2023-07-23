
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const RegisterModel=require('./models/Register');
const app=express();
app.use(express.json());
app.use(cors())

const mongoURI = 'mongodb+srv://Hrudayesh:Hrudayesh22@e-diary.19t8elh.mongodb.net/E-diary';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    // Your code here, e.g., defining Mongoose schemas and models
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// mongoose.connect("mongodb+srv://hrutestmail:LPJuiAzvWirfw4b1@react-diary.afoekjs.mongodb.net/React-Diary",{useNewUrlParser: true,useUnifiedTopology: true,w:"majority"});
// mongoose.connect("mongodb+srv://Hrudayesh:Hrudayesh22@e-diary.19t8elh.mongodb.net/E-diary", {useNewUrlParser: true,useUnifiedTopology: true,w:"majority"});

app.post('/register',(req,res)=>{
    RegisterModel.create(req.body)
    .then(registerUsers =>res.json(registerUsers))
    .catch(err=>res.json(err));

});

app.listen(3000,(req,res)=>{
    // res.send("server started");
    console.log("server started in terminal")
})