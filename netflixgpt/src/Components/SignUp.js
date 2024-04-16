import React, { useRef, useState } from 'react'
import { validateData } from '../Utils/validate'

const SignUp = ({setIsSignForm}) => {
     const email = useRef();
     const password = useRef();
     const username = useRef();
    const [errorMessage,setErrorMessage]=useState(null);     
    const handleSubmit = (e)=>{
        e.preventDefault();
          
         const isValid = validateData(email.current.value,password.current.value);
          

         if(!isValid){
           setErrorMessage(null);
           alert("valid")
         }else{
          setErrorMessage(isValid)
         }
   }
  return (
    <form className="mx-auto right-0 left-0 my-36 w-3/12 absolute p-12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign Up</h1>
        <input
          ref={username}
          type="Fullname"
          placeholder="Fullname"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        
         <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
          <p className="text-red-800 font-bold py-2 text-lg">{errorMessage?errorMessage:""}</p>

        <button className="p-4 my-6 bg-red-700 w-full" onClick={handleSubmit}>Sign Up</button>

        <p className="py-4 cursor-pointer" onClick={()=>{setIsSignForm(prev => !prev)}}>Already a user? Sign in now</p>
        </form>
  )
}

export default SignUp