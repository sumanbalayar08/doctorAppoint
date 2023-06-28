import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../Components/Layout";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
const dispatch=useDispatch();
const {user}=useSelector((state)=>state.user);

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/getUserData",
        {},
        { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
      );
      if(res.data.success){
        dispatch(setUser(res.data.data))
      }else{
        <Navigate to="/login"/>
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(!user){
    getUserData();
    }
  });

  return(
    <Layout>
     <h1>Home</h1>
     </Layout>
  )
};
export default Home;
