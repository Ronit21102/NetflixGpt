/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import {validateData} from "../Utils/validate";

const Login = () => {

    const [isSignForm , setIsSignForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const toggle = ()=>{
        setIsSignForm(prev => !prev);
    }
    const email = useRef();
    const password = useRef();
    const handleSubmit = (e)=>{
         e.preventDefault();
           
          const isValid = validateData(email.current.value,password.current.value);
           setErrorMessage(isValid)
           if(isValid)
            return;

        //sign in
          
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
       {
          isSignForm?(<form className="mx-auto right-0 left-0 my-36 w-3/12 absolute p-12 bg-black text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">Sign In</h1>
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <p className="text-red-800 font-bold py-2 text-lg">{errorMessage?errorMessage:""}</p>
          <button className="p-4 my-6 bg-red-700 w-full" onClick={handleSubmit}>Sign in</button>
  
          <p className="py-4 cursor-pointer" onClick={toggle}>New to netflix?Sign up now</p>
        </form>):(<SignUp setIsSignForm={setIsSignForm}/>)
       }
      
    </div>
  );
};

export default Login;
