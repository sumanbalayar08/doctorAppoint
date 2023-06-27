import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PublicRoutes = () => {
const auth=localStorage.getItem("token");
  return !auth?<Outlet/>:<Navigate to='/'/>
}

export default PublicRoutes;