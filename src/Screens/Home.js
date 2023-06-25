import React, { useEffect } from "react";
import axios from "axios";

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

  return <h1>Home</h1>;
};
export default Home;
