import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../Components/Layout";

const Home = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/getUserData",
        {},
        { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return(
    <Layout>
     <h1>Home</h1>
     </Layout>
  )
};
export default Home;
