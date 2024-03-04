import { motion } from "framer-motion";
export const About = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex justify-center ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div className=" text-white font-poppins  flex flex-col absolute top-[10rem]">
        <motion.h1
          className="text-5xl font-bold  border-b-2 border-orange-200 mb-[2rem] flex justify-center"
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 110,
          }}
        >
          About Us Career<span className="text-orange-200">Compass</span>
        </motion.h1>
        <motion.h2
          className="text-3xl font-poppins"
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 20 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "tween",
            stiffness: 110,
          }}
        >
          Objectives <br /> baki Rohit And Ankur likhbe akhane......
        </motion.h2>
      </motion.div>
    </div>
  );
};
