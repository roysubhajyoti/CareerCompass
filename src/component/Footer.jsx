import { AnimatedTool } from "./AnimatedTool";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
export const Footer = () => {
  return (
    <div className="bg-[#020617] text-white  pr-10 pl-10 pt-10 min-h-screen flex flex-col justify-center items-center flex-wrap">
      <div className="flex justify-evenly items-center mb-10 gap-96">
        <div className="w-1/3">
          <img src={Logo} alt="logo-CareerCompass" className="w-48" />
          <h1 className="text-xl">
            Career<span className="text-orange-300">Compass</span>
          </h1>
        </div>
        <div className="w-1/3">
          <AnimatedTool />
        </div>

        <ul className="flex flex-col gap-3 text-xl">
          <motion.li
            whileHover={{ scale: 1.5, originX: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Link to="/" className="hover:text-amber-200">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5, originX: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Link to="/plans" className="hover:text-amber-200">
              Plan
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5, originX: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Link className="hover:text-amber-200" to="/about">
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.5, originX: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Link className="hover:text-amber-200">Contact</Link>
          </motion.li>
        </ul>
      </div>

      <div className="flex justify-between p-2 mt-10 gap-10 bottom-0">
        <h1> © CareerCompass. All Rights Reserved.</h1>
        <h1>A product of S.A.R.S.tech</h1>
      </div>
    </div>
  );
};
