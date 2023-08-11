import React from "react";

const SingleEntry = ({ entry }) => {
  return (
    <div>
      <h2>Date:{new Date(entry.date).toLocaleDateString()}</h2>
      <p>Comment: {entry.comment}</p>
      <div>
        {entry.images.map((image, imgIndex) => (
          <img
            key={imgIndex}
            src={image}
            alt={`Image ${imgIndex + 1}`}
            className="w-12 h-12 object-cover mr-2"
          />
        ))}
      </div>
      {/* Additional details or styling can be added here */}
    </div>
  );
};

export default SingleEntry;
