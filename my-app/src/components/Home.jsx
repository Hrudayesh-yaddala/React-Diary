import React from 'react';
import backImage from '../Images/background.jpg';
// my-app\src\Images\background.jpg
function Home(){
    return(
        <div className='bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${backImage})` }}>
            <h1>Home Content Displayed here</h1>
        </div>
    );
}
export default Home;