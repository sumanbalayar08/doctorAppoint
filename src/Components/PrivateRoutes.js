import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideloading, showloading } from "../redux/features/alertSlice";
import axios from "axios";
import {setUser} from '../redux/features/userSlice'


const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const getUser = async () => {
    try {
      dispatch(showloading());
      const res=await axios.post("http://localhost:4000/api/getUserData",{token:localStorage.getItem('token')},{
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      dispatch(hideloading());
      if(res.data.success){
        dispatch(setUser(res.data.data));
      }else{
        <Navigate to='/login'/>
      }
    } catch (err) {
        dispatch(hideloading());
      console.log(err);
    }
  };

  useEffect(()=>{
    if(!user){
      getUser()
    }
  },[user,getUser]);

  const auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
