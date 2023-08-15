import React from 'react';
import homebg from'../Images/home.jpg'
import { Link } from 'react-router-dom';
// import backImage from '../Images/background.jpg';
// import DropDown from './DropDown';
// my-app\src\Images\background.jpg
function Home(){
    return(
      <div className='bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${homebg})`}}>
  <h1>Home Content Displayed here</h1>
  <div className="flex justify-center items-center relative h-screen">
  <div className="w-108 bg-[#9b44e7] flex justify-center absolute right-72 items-center h-60">
            <Link className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 mr-2 sm:text-base lg:text-lg" to={"/compose"}>New Entry</Link>
            <Link className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 mr-2 sm:text-base lg:text-lg" to={"/entries"}>View all Entries</Link>
            <Link className="px-4 py-2 text-white text-lg bg-purple-500 rounded hover:bg-purple-800 mr-2 sm:text-base lg:text-lg" to={"/entries"}>View all Entries</Link>
    </div>
  </div>
  <div className="h-40 sm:h-32 md:h-34 lg:h-48 xl:h-50"></div>
</div>

           
    );
}
export default Home;








{/* <div className="flex justify-center items-center h-screen bg-gray-100">
<div className="relative w-1/4 bg-blue-200 p-8 rounded-l-lg">
  <h1 className="text-2xl font-bold mb-4">Diary</h1>
  <div className="flex space-x-4">
    <button className="py-2 px-4 bg-blue-500 text-white rounded">New Entry</button>
    <button className="py-2 px-4 bg-blue-500 text-white rounded">View All Entries</button>
    <button className="py-2 px-4 bg-blue-500 text-white rounded">Journal Settings</button>
  </div>
</div>
</div> */}