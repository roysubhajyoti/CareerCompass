import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
export const Path = () => {
  const [userclass, setUserClass] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/paths")
      .then((response) => setUserClass(response.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(userclass);
  const handleLevel = (level) => {
    setSelectedLevel(level);
    setSelectedStream(null); // Reset selected course when changing stream
  };

  const handleStream = (stream) => {
    setSelectedStream(stream);
  };

  return (
    <div className="h-[200vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  text-white">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col justify-center items-center relative text-wrap ">
        <motion.h1
          className="relative top-28 text-3xl font-poppins text-center leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        >
          Explore the Plan on clicking the button You can see all the
          <br />
          possible Carrear Ptahs
        </motion.h1>
        <div className="flex flex-col w-full ">
          <div className="flex justify-center relative gap-4 text-wrap top-40">
            {userclass.map((data) => {
              if (data.class === "10") {
                return data.levels.map((level, index) => (
                  <div key={index}>
                    <motion.button
                      onClick={() => handleLevel(level)}
                      className="rounded-md bg-gray-900 hover:border-blue-600 border border-black p-3 font-poppins text-lg  active:bg-blue-700 focus:bg-blue-800"
                      initial={{ y: "-100vh" }}
                      animate={{ y: -20 }}
                      transition={{
                        delay: 0.2,
                        duration: 1,
                        type: "tween",
                      }}
                    >
                      {level.level}
                    </motion.button>
                    {selectedLevel === level && (
                      <ul>
                        {level.streams.map((stream, idx) => (
                          <li key={idx}>
                            <motion.button
                              onClick={() => handleStream(stream)}
                              className="rounded-md hover:border-blue-500 border border-black p-2 font-poppins bg-gray-800 text-md  active:bg-blue-700 focus:bg-blue-800 mt-1 "
                              initial={{ x: "-150vh" }}
                              animate={{ x: -5 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {stream.name}
                            </motion.button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ));
              } else {
                return null;
              }
            })}
          </div>
          <div className="w-full relative top-44">
            {selectedStream && (
              <div>
                <ul>
                  {selectedStream.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      className="font-poppins  p-1 w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 2 }}
                    >
                      {course.name.map((name, j) => (
                        <motion.button
                          key={j}
                          className="hover:text-blue-500 text-md border p-2 m-2 hover:bg-gray-900 rounded-md shadow-lg leading-tight"
                          whileHover={{ scale: 1.2, originX: 0 }}
                        >
                          {name}
                        </motion.button>
                      ))}
                    </motion.div>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="w-full relative top-52 ">
            {selectedStream && (
              <div>
                <ul>
                  {selectedStream.courses.map((course, i) => (
                    <li key={i}>Course Duration :{course.duration}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
