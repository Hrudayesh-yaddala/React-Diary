import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App(){
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}
export default App;