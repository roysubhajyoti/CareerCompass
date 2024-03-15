import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { useRef } from "react";
import { motion } from "framer-motion";
export const Popup = ({ onClose, selectedStream }) => {
  const popupRef = useRef();

  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-opacity-65 drop-shadow-lg bg-black flex justify-center items-center font-poppins"
      ref={popupRef}
      onClick={closePopup}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col">
        <button className="h-10 w-3  place-self-end " onClick={onClose}>
          <AiOutlineClose />
        </button>

        <div className="bg-gradient-to-r from-slate-500 to-slate-900/60 w-[400px] h-[300px] overflow-y-scroll rounded-md drop-shadow-md flex flex-col gap-2 p-2">
          {selectedStream && (
            <ul>
              {selectedStream.courses.map((course, i) => (
                <li key={i}>
                  <h1>duration : {course.duration}</h1>
                  <h2>Eligibility: {course.eligibility} </h2>
                  <h3>Age: {course.ageLimit}</h3>
                  <h3>Fee: {course.fee}</h3>
                  <h4>Salary: {course.salary}</h4>
                  <div className="p-3">
                    Employement area:
                    {course.employmentAreas.map((area, j) => (
                      <li key={j}>
                        <motion.button className="text-md">
                          {area}
                        </motion.button>
                      </li>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};
Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedStream: PropTypes.any.isRequired,
};
