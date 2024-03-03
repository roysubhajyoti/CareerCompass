import { motion } from "framer-motion";

export const Error = () => {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen text-white">
      <motion.h1
        initial={{ x: "-300vh" }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
        404 <span className="text-5xl font-thin"> | </span> This page could not
        be found
      </motion.h1>
    </div>
  );
};
