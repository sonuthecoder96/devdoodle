import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth.js"
import {logout}  from "../../store/authSlice.js"
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logOutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())  
            navigate("/login");            // to update the state
        })
        
        
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg=blue-100 rounded-full'
    onClick={logOutHandler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn