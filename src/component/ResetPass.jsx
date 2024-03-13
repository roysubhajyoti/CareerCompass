import { useState } from "react";
import img2 from "../assets/forgotAnime3.png";
// import cloud from "../assets/chatcloud.png";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const ResetPass = () => {

  const [password,setPassword] = useState();
  const [confirmpassword,setConfirmpassword] = useState();

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const {id,token} = useParams();
  console.log(id+"    "+token);
  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:3001/resetPassword",{password,confirmpassword,id,token})
    .then( res => {
      if(res.data.Status === "Success"){
        console.log("Password Reset Successful");
        //navigate('/login')
      }
    }
    )
    .catch(err =>{
      console.log(err);
    })
  }

  return (
    <div className=" flex  dark:bg-black bg-white   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[100vh]">
      <motion.div
        className="credentials absolute m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 2 }}
      >
        
        <form onSubmit={handleSubmit} className="absolute top-28 left-72 right-100 border-8 rounded-lg border-solid border-blue-300 p-5 bg-gray-200">
          <div className="w-[60vh] p-10">
            <h1 className="text-4xl font-bold font-poppins text-blue-500 text-center mb-3">Reset Password</h1>
            <p className="m-2 text-blue-400 font-poppins font-semibold text-lg text-left">
              New Password
            </p>
            <input type="password" name="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} className="w-full h-[80] py-2 px-3 rounded-lg border border-blue-500 hover:border-blue-900 hover:border-2" />
            
          </div>
          <div className="w-[60vh] p-10">
            
            <p className="m-2 text-blue-400 font-poppins font-semibold text-lg text-left">
              Re-Type New Password
            </p>
            <input type="password" name="confirm-password" placeholder="Confirm Password" onChange={(e)=>{setConfirmpassword(e.target.value)}}  className="w-full h-[80] py-2 px-3 rounded-lg border border-blue-500 hover:border-blue-900 hover:border-2" />
            
          </div>

          <div className="ml-40 ">
            <button
              type="submit"
              className="bg-blue-400 w-32 text-center p-2 rounded-lg text-white font-poppins text-lg  hover:bg-blue-600  "
            >
             Reset
            </button>
          </div>
        </form>
      </motion.div>

      <motion.img
        src={img2}
        className=" w-[60vw] h-[100vh] ml-96 mt-40 pl-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      ></motion.img>
    </div>
  );
};
