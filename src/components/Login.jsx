import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {login as authLogin} from "../store/authSlice"
import {Button , Input , Logo } from "./index"
import { useDispatch, useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit }  = useForm()
    const [error , setError] = useState("")
    
    const login = async(data) =>{
        setError('');
        try {
                const session = await authService.login(data);
                if(session){
                    const currentUser = await authService.isLogin()  // get current user
                    if(currentUser){
                        dispatch(authLogin(currentUser))
                        navigate("/");
                        // console.log('Login component mounted');
                    }
                }
        } catch (error) {
            setError(error.message || 'failed to login' );
            console.log(`Error login user`,error);            
        }
    }

  return (
    <div className="flex items-center justify-center w-full ">
      <div className="mx-auto w-full max-w-lg  .glass text-white rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full text-center gradient-text text-2xl">
            Welcome Back
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don't have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="password:"
              placeholder="Enter password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login