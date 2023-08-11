// import React from 'react';
// import homebg from'../Images/home-bg.jpg'
// import backImage from '../Images/background.jpg';
// import { Card, Typography } from "@material-tailwind/react";

import backImage from '../Images/background.jpg';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-hot-toast";

const Entries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user/entries");
      setEntries(response.data.entries);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/user/entries/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        fetchEntries();
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
      toast.error("Failed to delete entry");
    }
  };

  return (
    <div className='bg-[#deb7ff] flex-grow text-center hover:bg-backImage focus:bg-startImage  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backImage})`}}>
    <div className="container mx-auto py-10">
      <div>
      <h1 className="text-3xl font-semibold mb-6 text-center">{localStorage.getItem("firstname")+"'s"+" "+"Journal"}</h1>
      <Link className="px-4 py-3 text-white text-lg bg-purple-300 bg-[#a86add] rounded hover:bg-purple-400 mr-2 sm:text-base lg:text-lg" to={"/compose"}>+ NEW ENTRY</Link>
      </div>
      {/* <Link className="px-4 py-2 text-white text-lg bg-blue-500 rounded hover:bg-blue-600 mr-2 sm:text-base lg:text-lg" to={"/login"}>Login</Link> */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">S.NO</th>
            <th className="border p-2">Entry</th>
            <th className="border p-2">Date Created</th>
            {/* <th className="border p-2">Images</th> */}
            <th className="border p-2">Edit</th>
            <th className="border p-2"></th> 
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry._id}>
              <td className="border p-3">{index + 1}</td>
              <td className="border p-3">{entry.comment}</td>
              <td className="border p-3">{new Date(entry.date).toLocaleDateString() }</td>
              {/* <td className="border p-2">
                {entry.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    className="w-12 h-12 object-cover mr-2"
                  />
                ))}
              </td> */}
              <td className="border p-3"><Link className="px-3 py-2 text-white text-sm bg-purple-300 bg-[#a86add] rounded hover:bg-purple-400 mr-2 sm:text-base lg:text-sm" to={"/compose"}>VIEW</Link></td>
              <td className="border p-3">
                <button onClick={() => handleDeleteEntry(entry._id)} className="text-red-600"><FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
  
};

export default Entries;

