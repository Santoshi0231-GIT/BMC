import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
const userAuth=()=>{
const user={loggedIn:true}
return user&& user.loggedIn;

}




const protectedRoute = () => {
    const isAuth=userAuth()

  return isAuth? <Outlet/>:<Navigate to='/'/>
}

export default protectedRoute


