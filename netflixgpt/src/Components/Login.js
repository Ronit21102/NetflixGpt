import React, { useState } from "react";
import Header from "./Header";
import SignUp from "./SignUp";

const Login = () => {

    const [isSignForm , setIsSignForm] = useState(true);

    const toggle = ()=>{
        setIsSignForm(prev => !prev);
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
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full">Sign in</button>
  
          <p className="py-4 cursor-pointer" onClick={toggle}>New to netflix?Sign up now</p>
        </form>):(<SignUp setIsSignForm={setIsSignForm}/>)
       }
      
    </div>
  );
};

export default Login;
