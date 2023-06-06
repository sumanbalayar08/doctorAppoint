import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Home from "./Screens/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
