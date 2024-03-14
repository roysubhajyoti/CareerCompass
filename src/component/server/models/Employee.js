const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    dob: String,
    email:String,
    password:String,
    phone:String
})

const EmployeeModel = new mongoose.model("employess",EmployeeSchema);

module.exports = EmployeeModel;