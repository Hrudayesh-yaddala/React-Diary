import React from "react";
import bgImage from '../Images/bgimage.jpg';
// my-app\src\Images\bgimage.jpg
function Contact(){
    return(
        <div className='bg-[#deb7ff] flex-grow text-center hover:bg-bgImage focus:bg-startImage  bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${bgImage})` }}>
            <h1>Home Content Displayed here</h1>
        </div>
    );
}

export default Contact;