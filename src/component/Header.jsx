import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Header = () => {

  const [isLoggedInS, setIsLoggedInS] = useState(
    sessionStorage.getItem("isLoggedInS") === "true"
  );
  const [isLoggedInL, setIsLoggedInL] = useState(
    window.localStorage.getItem("isLoggedInL") === "true"
  );
  const navigate = useNavigate();

  

  useEffect(() => {
   
    const isLoggedInS = sessionStorage.getItem("isLoggedInS") === "true";
    setIsLoggedInS(isLoggedInS);
    
    const isLoggedInL = window.localStorage.getItem("isLoggedInL") === "true";
    setIsLoggedInL(isLoggedInL);

  }, []);

  
  const handleLogout = () => {
    

    if(isLoggedInS){
      
      sessionStorage.removeItem("isLoggedInS");
      setIsLoggedInS(false);
      
    }
    else{
      window.localStorage.removeItem("isLoggedInL");
      setIsLoggedInL(false);
      

    }
    
    navigate('/login');
  };
  return (
    <motion.div
      className="bg-black h-14 flex flex-row justify-around items-center z-50 fixed top-5 inset-x-0 rounded-full hover:bg-slate-900 max-w-2xl mx-auto"
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 5, opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 130 }}
    >
      <div>
        <Link to="\">
          <img src={Logo} alt="Logo" className="h-10 w-12" />
        </Link>
      </div>

      <ul className="text-white list-none flex gap-7 text-xl font-poppins">
        <li>
          <Link to="/" className="hover:text-amber-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/plans" className="hover:text-amber-200">
            Plan
          </Link>
        </li>
        <li>
          <Link className="hover:text-amber-200" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-amber-200" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          {(isLoggedInL || isLoggedInS) ? (
            <button onClick={handleLogout} className="text-white hover:border-b-red-300 hover:border-b-[.2px]">Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}  
          
        </li>
      </ul>
    </motion.div>
  );
};
