import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
export const Header = () => {
  return (
    <motion.div
      className="bg-black h-14 flex flex-row justify-around items-center z-50 fixed top-5 inset-x-0 rounded-full hover:bg-slate-900 max-w-2xl mx-auto"
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 5, opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <div>
        <Link to="\">
          <img src={Logo} alt="Logo" className="h-10 w-12" />
        </Link>
      </div>

      <ul className="text-white list-none flex gap-7 text-xl">
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
          <Link
            to="/login"
            className="text-white hover:border-b-red-300 hover:border-b-[.2px]"
          >
            Login/SignUp
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};
