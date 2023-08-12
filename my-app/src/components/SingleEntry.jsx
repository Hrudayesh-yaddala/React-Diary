import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// const handleDeleteEntry=require('./Entries')
const SingleEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetchEntry();
  }, []);

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

  const fetchEntry = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/user/entries/${id}`);
      setEntry(response.data.entry);
    } catch (error) {
      console.log("Error fetching entry:", error);
    }
  };

  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Entry Details</h1>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{new Date(entry.date).toLocaleDateString()}</h2>
        {/* <button onClick={() => handleDeleteEntry(entry._id)} className="text-red-600"><FontAwesomeIcon icon={faTrash} /></button> */}
        <p className="mb-4">{entry.comment}</p>
        <div className="flex space-x-4">
          {entry.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-48 h-48 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleEntry;
