const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const EmployeeModel = require("./models/Employee");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { useParams } = require("react-router-dom");
const cookieParser = require("cookie-parser");

const JWT_SECRET = "hvdvayddrt72839289()aiyg8t87qt723932938883uh78ttq3ifi78272jbkj?[]]pou89ywe"


const app = express();
app.use(express.json())
app.use(cors({origin:true,credentials:true}));


app.use(cookieParser());
mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login',(req,res) =>{
    const {email,password} = req.body;
    console.log(email+password);
    EmployeeModel.findOne({email : email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("Fail")
            }
        }else{
            res.json("NoUser");
        }
    })
})

app.post('/Signup',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/forgot',async (req,res) =>{
    const {email} = req.body;
    console.log("Email: "+email);
    
    try{
    
    EmployeeModel.findOne({email})
    .then((user) =>{
        if(!user){
            res.json({Status: "User not Exists"});
        }
    else{
        res.json({Status:"Success"})
        const secret = JWT_SECRET + user.password;
    const token = jwt.sign({email:user.email,id: user._id},secret,{expiresIn:"10m"});
    const link = `http://localhost:5173/resetPassword/${user._id}/${token}`;
    console.log(link);

    }}) 
    }catch(error){
        console.log("Error:"+error);
    }
    
});

app.get('/resetPassword/:id/:token',(req,res)=>{
    const{id,token} = req.body;
    
    EmployeeModel.findOne({_id:id})
    .then((user)=>{
        if(!user){
            res.json({Status:"User doesn't exists"});
        }
        else{
            const secret = JWT_SECRET + user.password;
            const verify = jwt.verify(token,secret);
        }
        
    })
    
})

app.listen(3001,()=>{
    console.log("Server is Running");
})