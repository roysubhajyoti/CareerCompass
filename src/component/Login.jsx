import videoBg from "../assets/videoBg.mp4";
import { motion } from "framer-motion";

export const Login = () => {
  return (
    <div className="container flex justify-center items-center min-h-[100vh] box-border ">
      <video
        className="w-[100%] h-[100%] object-cover bg-center"
        src={videoBg}
        autoPlay
        muted
        loop
      ></video>

      <motion.form
        className="absolute w-[30vw] h-[50vh] bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-blur-sm shadow-lg rounded-md py-8 px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white text-center">LOGIN</h1>

        <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="w-[100%] h-[100%] bg-transparent border-2 border-solid border-slate-400
        border-opacity-25 rounded-3xl outline-none placeholder-white pt-5 pb-6 pl-5 pr-12"
          />
        </div>

        <div className="relative w-[100%] h-[10%] my-5 ">
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-[100%] h-[100%] bg-transparent border-2 border-solid border-slate-400
        border-opacity-25 rounded-3xl outline-none placeholder-white pt-5 pb-6 pl-5 pr-12  "
          />
        </div>

        <div className="flex justify-between text-[15] mt-2 mb-2">
          <label className="accent-white mr-1 text-white">
            <input
              type="checkbox"
              name="rememberMe"
              className="accent-white mr-1"
            />
            Remember me?
          </label>

          <a href="#" className="text-white hover:underline">
            Forgot Password?
          </a>
        </div>

        <div>
          <button
            type="submit"
            className="w-[100%] mt-4 bg-white h-11 rounded-3xl shadow-md cursor-pointer text-black font-bold hover:bg-blue-500"
          >
            Login
          </button>
        </div>
        <div className="text-base text-center mt-5 text-white">
          <p className="font-semibold">
            Do not have an account?
            <a href="#" className="font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </motion.form>
    </div>
  );
};
