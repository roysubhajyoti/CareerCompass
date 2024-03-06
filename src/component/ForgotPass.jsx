import img2 from "../assets/forgotAnime3.png";
// import cloud from "../assets/chatcloud.png";
import { motion } from "framer-motion";

export const ForgotPass = () => {
  return (
    <div className="conatiners flex text-white dark:bg-black bg-white   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[100vh]">
      <motion.div
        className="credentials absolute m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 2 }}
      >
        {/* <img src={cloud} className="w-[40vw] h-[80vh] ml-52 " /> */}
        <form className="absolute top-28 left-72 right-100">
          <div className="w-[60vh] text-center p-10">
            <h1 className="text-3xl font-poppins ">Find Account</h1>
            <p className="m-2 text-blue-400 font-poppins font-semibold text-lg ">
              Username
            </p>
            <input
              type="text"
              name="name"
              placeholder="Susheel Json"
              className="w-[100%] h-[80] py-2 px-3 rounded-lg border border-blue-500 hover:border-blue-900 hover:border-2"
            />
            <p className="m-2 text-blue-400 font-poppins font-semibold text-lg ">
              Phone Number
            </p>
            <input
              type="text"
              name="phone"
              placeholder="+91 7894561230"
              className="w-[100%] h-[80] py-2 px-3 rounded-lg border border-blue-500 hover:border-blue-900 hover:border-2"
            />
          </div>

          <div className="ml-40 ">
            <button
              type="submit"
              className="bg-blue-400 w-32 text-center p-2 rounded-lg text-white font-poppins text-lg  hover:bg-blue-600  "
            >
              Next
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
