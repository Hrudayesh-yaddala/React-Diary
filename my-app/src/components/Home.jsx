import React from 'react';
import homebg from'../Images/home-bg.jpg'
import { Link } from 'react-router-dom';
// import backImage from '../Images/background.jpg';
// import DropDown from './DropDown';
// my-app\src\Images\background.jpg
function Home(){
    return(
        <>
        <div className='bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${homebg})`}}>
            <h1>Home Content Displayed here</h1>
            <div className="flex justify-center items-center relative h-screen">
                <div className="w-96 bg-[#9b44e7] flex justify-center absolute right-72 items-center h-32">
                    <Link className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 mr-2 sm:text-base lg:text-lg" to={"/compose"}>New Entry</Link>
                    <Link className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 mr-2 sm:text-base lg:text-lg" to={"/entries"}>View all Entries</Link>
                </div>
            </div>
        </div>
        </>
        
    );
}
export default Home;