import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../Components/Layout";
import { hideloading } from "../redux/features/alertSlice";
import { useDispatch } from "react-redux";

const Home = () => {
const dispatch=useDispatch();

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/getUserData",
        {},
        { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
      );
      if(res.data.success){
        
      }
    } catch (err) {
      dispatch(hideloading());
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  },[]);

  return(
    <Layout>
     <h1>Home</h1>
     </Layout>
  )
};
export default Home;
