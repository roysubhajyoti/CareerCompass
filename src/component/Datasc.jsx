import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { science_data } from "../utils/science";
import { AiOutlineClose } from "react-icons/ai";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";

export const Datasc = ({ name, onClose }) => {
  const [search, setSearch] = useState("medicine");
  const [isClicked, setIsClicked] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const showDb = useRef();
  const closeDb = (e) => {
    if (showDb.current === e.target) onClose();
  };
  const handleSearch = () => {
    const result =
      science_data[0]?.interests[search.toLowerCase()]?.path ||
      "Noted Will Update Soon";
    setSearchResult(result);
    setIsClicked(true);
  };

  console.log(name);

  return (
    name === "Science" && (
      <motion.div
        className="fixed inset-0 bg-opacity-65 drop-shadow-lg bg-black flex justify-center items-center font-poppins"
        ref={showDb}
        onClick={closeDb}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col ">
          <button className="h-10 w-3  place-self-end " onClick={onClose}>
            <AiOutlineClose />
          </button>
          <div className="flex flex-col gap-5 font-poppins justify-center items-center w-[500px]">
            <h1 className=" text-xl text-center">
              Enter your Field of Interest
            </h1>
            <input
              type="text"
              placeholder="eg. medicine"
              onChange={(e) => setSearch(e.target.value)}
              className="text-white text-xl  w-96 text-center rounded-lg bg-gray-900 h-8"
            />
            <button
              onClick={handleSearch}
              className="border rounded-md bg-teal-900 w-96 h-8 text-xl"
            >
              Search
            </button>{" "}
            {isClicked && (
              <motion.div
                className="bg-gradient-to-r from-slate-500 to-slate-900/60 w-[500px] h-[300px] overflow-y-scroll rounded-md drop-shadow-md flex flex-col gap-2 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ul>
                  {Array.isArray(searchResult) ? (
                    searchResult.map((item, index) => (
                      <li key={index} className="m-4 text-justify text-md">
                        <MdDoubleArrow />
                        {item}
                      </li>
                    ))
                  ) : (
                    <li>{searchResult}</li>
                  )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    )
  );
};

Datasc.propTypes = {
  onClose: PropTypes.func.isRequired,
  name: PropTypes.any.isRequired,
};
