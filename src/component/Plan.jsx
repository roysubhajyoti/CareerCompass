import { ThreeDCardDemo } from "./ThreeDCard";
import student from "../assets/student.avif";
import parent from "../assets/parent.jpg";
import { motion } from "framer-motion";
export const Plan = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center text-white">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center items-center absolute top-28">
        <motion.h1
          className="text-4xl"
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 20 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 110,
          }}
        >
          ....Here You Will Explore all The Paths....
        </motion.h1>
        <motion.div
          className="flex justify-center items-center gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, transition: 1 }}
        >
          <ThreeDCardDemo
            section={"The Parents Section"}
            desc={
              "Click On Explore/Singup if you did not SignUp please do SignUp first"
            }
            linkc={"/plans"}
            pic={parent}
          />
          <ThreeDCardDemo
            section={"The Student Section"}
            desc={
              "Click On Explore/Singup if you did not SignUp please do SignUp first"
            }
            linkc={"/plans"}
            pic={student}
          />
        </motion.div>
      </div>
    </div>
  );
};
