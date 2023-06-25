import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Home from "./Screens/Home";
import { UseSelector, useSelector } from "react-redux";
import Spinner from "./Components/Spinner";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading ? (
        <Spinner/>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
