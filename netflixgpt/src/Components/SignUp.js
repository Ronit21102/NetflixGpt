import React from 'react'

const SignUp = ({setIsSignForm}) => {
  return (
    <form className="mx-auto right-0 left-0 my-36 w-3/12 absolute p-12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign Up</h1>
        <input
          type="Fullname"
          placeholder="Fullname"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        
         <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full">Sign Up</button>

        <p className="py-4 cursor-pointer" onClick={()=>{setIsSignForm(prev => !prev)}}>Already a user? Sign in now</p>
        </form>
  )
}

export default SignUp