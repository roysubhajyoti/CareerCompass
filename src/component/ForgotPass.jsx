import { useState } from "react";
import img2 from "../assets/forgotAnime3.png";
// import cloud from "../assets/chatcloud.png";
import { motion } from "framer-motion";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const ForgotPass = () => {
  const [email, setEmail] = useState();

  axios.defaults.withCredentials = true;

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email in HS:" + email);

    axios
      .post("http://localhost:3000/forgot", { email })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Successful");
        } else if (res.data.Status === "User not Exists") {
          alert("No such User Exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" flex  dark:bg-black bg-white   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[100vh]">
      <motion.div
        className="credentials absolute m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 2 }}
      >
        <form
          onSubmit={handleSubmit}
          className="absolute top-28 left-72 right-100 border-8 rounded-lg border-solid border-blue-300 p-5 bg-gray-200"
        >
          <div className="w-[60vh] p-10">
            <h1 className="text-4xl font-bold font-poppins text-blue-500 text-center mb-3">
              Find Account
            </h1>
            <p className="m-2 text-blue-400 font-poppins font-semibold text-lg text-left">
              Email
            </p>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[80] py-2 px-3 rounded-lg border border-blue-500 hover:border-blue-900 hover:border-2"
            />
          </div>

          <div className="ml-40 ">
            <button
              type="submit"
              className="bg-blue-400 w-32 text-center p-2 rounded-lg text-white font-poppins text-lg  hover:bg-blue-600  "
            >
              Find
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
