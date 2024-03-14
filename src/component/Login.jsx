import { Link, useNavigate } from "react-router-dom";
import videoBg from "../assets/videoBg.mp4";
import { motion } from "framer-motion";
import { FaUserLarge , FaLock } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const passError = document.getElementById("wrong");
  

  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  
  const handleRememberMeChange = (e) => {
    
    setRememberMe(e.target.checked);
    
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Enterring HandleSubmit");


    axios.post("http://localhost:3000/login",{email,password})
    .then(result => {
      console.log(result)
      console.log("  ___  "+rememberMe);
      if(result.data === "Success"){
        if(rememberMe){
          window.localStorage.setItem("isLoggedInL", "true");
          
        }
        else{
          sessionStorage.setItem("isLoggedInS", "true");
          
        }
        setTimeout(() =>{
          window.location.reload(); 
        },1000)
          
      
        navigate('/plans')
      }     
      else if(result.data === "Fail"){
          passError.innerText = "Incorrect Email or Password. Try again";
          passError.style.display = "block";
          navigate('/login')
      }
      else if(result.data === "NoUser"){
        passError.innerText = "No such User exists.";
        passError.style.display = "block";
        navigate('/login')
    }
      
    }
    )
    .catch(err =>{
      if(err.message === 'Network Error' && !err.response)
      console.log("The Error: Make sure ApI is running");
    })
  }
  return (
    <div className="container flex justify-center items-center min-h-[100vh] box-border ">
      <video
        className="w-[100%] h-[100%] object-cover bg-center"
        src={videoBg}
        autoPlay
        muted
        loop
      ></video>

      <motion.form onSubmit={handleSubmit}
        className="absolute w-[30vw] h-[50vh] bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-blur-sm shadow-lg rounded-md py-8 px-10 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white text-center font-poppins">
          Login
        </h1>
        <div id="wrong" className="text-sm p-1 -mb-5 mt-3 text-center text-white"></div>
        <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
          
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] h-[100%] bg-transparent border-2 border-solid border-slate-400
        border-opacity-25 rounded-3xl outline-none placeholder-white pt-5 pb-6 pl-5 pr-12"
          />
          <div className="absolute top-4 left-88 right-4 text-white"><FaUserLarge /></div>
          
        </div>

        <div className="relative w-[100%] h-[10%] my-5 ">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-[100%] h-[100%] bg-transparent border-2 border-solid border-slate-400
        border-opacity-25 rounded-3xl outline-none placeholder-white pt-5 pb-6 pl-5 pr-12  "
          />
          <div className="absolute top-4 left-88 right-4 text-white"><FaLock /></div>
          
        </div>

        <div className="flex justify-between text-[15] mt-2 mb-2">
          <label className="accent-white mr-1 text-white">
            <input
              type="checkbox"
              name="rememberMe"
              className="accent-white mr-1"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember me?            
          </label>
          <Link to="/forgot" className="text-white hover:underline font-poppins">{" "}Forgot Password?</Link>
        </div>

        <div>
          <button
            type="submit"
            className="w-[100%] mt-4 bg-white h-11 rounded-3xl shadow-md cursor-pointer text-black font-bold hover:bg-blue-500 font-poppins
            "
          >
            Login
          </button>
        </div>
        <div className="text-base text-center mt-5 text-white">
          <p className="font-semibold">
            Do not have an account?
            <Link to="/signup" className="font-semibold hover:underline">
              {" "}
              SignUp
            </Link>
          </p>
        </div>
      </motion.form>
    </div>
  );
};
