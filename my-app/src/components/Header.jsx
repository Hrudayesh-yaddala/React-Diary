// import React, { useState } from 'react';
// import {Link,useMatch,useResolvedPath} from 'react-router-dom';

// function CustomLink({to,children,...props}){
//   const resolvedPath=useResolvedPath(to)
//   const isActive=useMatch({path:resolvedPath.pathname,end:true})
//   return(
//     <div className={isActive ? "active" :""}>
//       <Link to={to}{...props}>
//         {children}
//       </Link>
//     </div>
//   )
// }
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };
//   // #f3636f
//   return (
//     <header className="bg-[#a86add]">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className=" ml-auto flex-shrink-0">
//               <Link to="/home" className="text-white text-lg">My Diary</Link>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <CustomLink to="/home" className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium">Home</CustomLink>
//                 <CustomLink to="/About" className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium">About</CustomLink>
//                 <CustomLink to="/Contact" className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium">Contact</CustomLink>
//                 <CustomLink to="/Compose" className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium">Compose</CustomLink>
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[] focus:outline-none focus:bg-[#923bdf] focus:text-white transition duration-150 ease-in-out">
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Responsive menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 sm:px-3">
//               <CustomLink to="/home" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</CustomLink>
//               <CustomLink to="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</CustomLink>
//               <CustomLink to="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</CustomLink>
//               <CustomLink to="/compose" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Compose</CustomLink>             
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DropDown from './DropDown';
// import {firstname} from './Login';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[OpenProfile,setOpenProfile]=useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Get the current location to apply the "active" class to the active link
  const location = useLocation();

  return (
    <header className="bg-[#a86add]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-auto flex-shrink-0">
              <NavLink to="/home" className="text-white text-lg">My Diary</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-10 flex items-baseline space-x-4 flex items-right">
                <NavLink to="/home"className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium" activeClassName="active">Home</NavLink>
                <NavLink to="/About" className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium" activeClassName="active">About</NavLink>
                <NavLink to="/Contact"className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium"activeClassName="active">Contact</NavLink>
                <NavLink to="/Compose"className="text-gray-300 hover:bg-[#912ee7] hover:text-white px-3 py-2 rounded-md text-md font-medium"activeClassName="active">Compose</NavLink>
                <label onClick={()=>setOpenProfile((prev)=>!prev)}>Ravi</label>
                {/* <label>{firstname}</label> */}
              </div>
            </div>
          </div>
          {OpenProfile && <DropDown/>}
         
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[] focus:outline-none focus:bg-[#923bdf] focus:text-white transition duration-150 ease-in-out"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <NavLink
              exact
                to="/home"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                Contact
              </NavLink>
              <NavLink
                to="/compose"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                activeClassName="active"
              >
                Compose
              </NavLink>
              {/* <label>{firstname}</label> */}
             
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


