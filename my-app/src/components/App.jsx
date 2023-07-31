/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Compose from "./Compose";
import Contact from "./Contact";
import Entries from "./Entries";
import Start from "./Start";
import Register from "./Register";
import Login from "./Login";
import {Route,Routes} from 'react-router-dom';
import ProtectedLayout from "./ProtectedLayout";
import  { Toaster } from 'react-hot-toast';
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
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="compose" element={<Compose/>} />
                    <Route path="entries" element={<Entries/>}/>

                </Route>

            </Routes>
            {/* <Register/> */}
            <Toaster />
        </div>
    );
}
export default App;