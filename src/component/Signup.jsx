import img1 from "../assets/signupBackground.png";
import { motion } from "framer-motion";
export const SignUp = () => {
  return (
  <div className="container flex justify-center items-center min-h-[100vh] box-border">

    
      <img src={img1} className="h-[120vh] w-[100%] bg-center object-cover"></img>
    
    <motion.form className="absolute w-[30%] px-10 py-10 mt-20 text-white bg-transparent border-2 border-dashed border-slate-400 rounded-md backdrop-blur-sm shadow-lg border-opacity-20"
     initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.6 }}>
              <h1 className="text-4xl font-bold text-white text-center font-poppins">Create an Account</h1>
          

          <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
              <input type="text" name="name" placeholder="e.g.Johny Sins" required
              className="w-[100%] h-[100%] pt-2 pb-4 pl-5 pr-12 outline-none rounded-3xl bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
          </div>
          <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
              <input type="number" name="day" placeholder="Day" required
              className="w-[20%] h-[100%] pt-2 pb-4 pl-5 pr-2 mr-4 ml-2 outline-none rounded-xl bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
              <input type="number" name="month" placeholder="Month" required
              className="w-[30%] h-[100%] pt-2 pb-4 pl-5 pr-2 mr-4 ml-2 outline-none rounded-xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
              <input type="number" name="year" placeholder="Year" required
              className="w-[25%] h-[100%] pt-2 pb-4 pl-5 pr-2 mr-4 ml-2 outline-none rounded-xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
          </div>
          <div className=" relative w-[100%] h-[10%] mb-8 mt-6">
              <input type="email" name="email" placeholder="xyz@gmail.com" required
              className="w-[100%] h-[100%] pt-2 pb-4 pl-5 pr-12 outline-none rounded-3xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
          </div>
          <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
                <input type="password" name="password" placeholder="Password" required
              className="w-[100%] h-[100%] pt-2 pb-4 pl-5 pr-12 outline-none rounded-3xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
          </div>
          <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
                <input type="number" name="phone" placeholder="Phone No." required
              className="w-[100%] h-[100%] pt-2 pb-4 pl-5 pr-12 outline-none rounded-3xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              />
          </div>
          <label className=""> 
                <input type="radio" name="male" required
              className=" h-[100%] outline-none rounded-3xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25 "
              />
              <span className="font-poppins text-2xl mx-2 font-semibold text-white ">Male</span>
                <input type="radio" name="female" required 
              className=" h-[100%] outline-none rounded-3xl  bg-transparent border-2 border-solid border-slate-400
              border-opacity-25"
              /><span className="font-poppins text-2xl mx-2 font-semibold text-white ">Female</span></label>
          
          <div className="relative w-[100%] h-[10%] mb-8 mt-2 ">
              <input type="checkbox" required
              className=" h-[100%] pt-2 pb-4 pl-5 pr-12 outline-none rounded-3xl"
              />
              <span className="font-poppins text-sm mx-2 font-medium text-white ">I agree that I have read the <a href="#" className="text-blue-300 font-semibold ">Terms and Conditions</a> and the policies.</span>
          </div>
          <div className="relative w-[100%] h-[10%] mb-8 mt-6 ">
                <button type="submit"
              className="w-[100%] h-[100%] pt-3 pb-4 pl-5 pr-12 outline-none rounded-3xl bg-slate-100 shadow-lg cursor-pointer text-black font-bold hover:bg-slate-400 hover:text-white font-poppins
              "
              >Create</button>
          </div>
        
    </motion.form>
  </div>
  );
};
