import React, { Children } from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import Login from '../Screens/Login';
import Register from '../Screens/Register';

const PrivateRoutes=()=>{
    const auth=localStorage.getItem("token");
    return auth?<Outlet/>:<Navigate to='/login'/>;
}
export default PrivateRoutes;