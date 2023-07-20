import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Compose from "./Compose";
import Contact from "./Contact";
import Start from "./Start";
import Register from "./Register";
import Login from "./Login";
import {Route,Routes} from 'react-router-dom';
import ProtectedLayout from "./ProtectedLayout";

function App(){
    return(
        <div className="flex flex-col min-h-screen">
            {/* <Header/> */}
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Start/>}/>
                <Route path="/" element={<ProtectedLayout/>}>
                    <Route path="home" element={<Home/>} />
                    <Route path="About" element={<About/>} />
                    <Route path="Contact" element={<Contact/>} />
                    <Route path="Compose" element={<Compose/>} />
                </Route>

            </Routes>
            {/* <Register/> */}
        </div>
    );
}
export default App;