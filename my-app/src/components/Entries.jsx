import React from 'react';
import homebg from'../Images/home-bg.jpg'
import backImage from '../Images/background.jpg';
function Entries(){
    return(
        <div className='bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backImage})`}}>
            <h1>Entries Content Displayed here</h1>
        </div>
        
    );
}
export default Entries;