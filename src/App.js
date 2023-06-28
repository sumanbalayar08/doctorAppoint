import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Home from "./Screens/Home";
import {useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import PrivateRoutes from "./Components/PrivateRoutes";
import PublicRoutes from "./Components/PublicRoutes";
import { Layout } from "antd";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PublicRoutes/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
