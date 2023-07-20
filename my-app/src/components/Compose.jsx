// import React from "react";

// function Compose(){
//     return(
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
//         <div class="flex flex-col space-y-6">
//           <div>
//             <label for="date" class="block text-gray-700 font-medium mb-2">Date</label>
//             <input type="text" id="date" name="date" placeholder="Select a date" class="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 "/>
//           </div>
//           <div>
//             <label for="memories" class="block text-gray-700 font-medium mb-2">Memories</label>
//             <textarea id="memories" name="memories" rows="4" placeholder="Write your memories" class="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//           </div>
//           <button class="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md">Save</button>
//         </div>
//       </div>
      
  
        
//     );
// }

// export default Compose;

import React, { useState } from 'react';
import bgImage from '../Images/bgimage.jpg';
import backImage from '../Images/background.jpg';
const Compose = () => {
  const [comment, setComment] = useState('');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState(14);
  const [textAlign, setTextAlign] = useState('left');
  const [images, setImages] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('https://picsum.photos/200');
  const [savedEntry, setSavedEntry] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
  };

  const handleTextAlignChange = (e) => {
    setTextAlign(e.target.value);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...uploadedImages]);
  };

  const handleSaveEntry = () => {
    // Logic to save the diary entry
    const entry = {
      comment,
      fontFamily,
      fontSize,
      textAlign,
      images,
      backgroundImage,
    };
    setSavedEntry(JSON.stringify(entry));
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const currentDay = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return (
    <div className="flex-grow p-4 border border-gray-300 rounded hover:bg-bgImage focus:bg-startImage  bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-xl font-bold">{currentDate}</div>
          <div className="text-md">{currentDay}</div>
        </div>
        <button
          className="px-5 py-3 text-white bg-[#a359e4] rounded-xl hover:bg-[#c496ec]"
          onClick={handleSaveEntry}
        >
          Save
        </button>
      </div>

      <textarea
        className={`w-full h-48 p-2  bg-transparent resize-none border border-gray-600 rounded  ${fontFamily} text-${fontSize} text-${textAlign}`}
        placeholder="Write your entry here..."
        value={comment}
        onChange={handleCommentChange}
        style={{ fontFamily: fontFamily, fontSize: `${fontSize}px`, textAlign: textAlign }}
      ></textarea>

      <div className="flex flex-col sm:flex-row sm:items-center mt-2">
        <div className="mb-2 sm:mb-0 sm:mr-4">
          <label htmlFor="fontFamily" className="mr-2">
            Font Family:
          </label>
          <select
            id="fontFamily"
            className="px-2 py-1 border border-gray-300 rounded"
            value={fontFamily}
            onChange={handleFontFamilyChange}
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            {/* Add more font options as needed */}
          </select>
        </div>

        <div className="mb-2 sm:mb-0 sm:mr-4">
          <label htmlFor="fontSize" className="mr-2">
            Font Size:
          </label>
          <select
            id="fontSize"
            className="px-2 py-1 border border-gray-300 rounded"
            value={fontSize}
            onChange={handleFontSizeChange}
          >
            <option value={12}>12</option>
            <option value={14}>14</option>
            <option value={16}>16</option>
            {/* Add more font size options as needed */}
          </select>
        </div>

        <div className="mb-2 sm:mb-0 sm:mr-4">
          <label htmlFor="textAlign" className="mr-2">
            Text Alignment:
          </label>
          <select
            id="textAlign"
            className="px-2 py-1 border border-gray-300 rounded"
            value={textAlign}
            onChange={handleTextAlignChange}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="imageUpload" className="mr-2">
            Insert Image:
          </label>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <button
            className="px-4 py-2 text-white bg-[#9b44e7] rounded hover:bg-[#a17ec0]"
            onClick={() => document.getElementById('imageUpload').click()}
          >
            Upload
          </button>
        </div>
      </div>

      {images.length > 0 && (
        <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="w-21 h-21 object-cover object-center rounded-xl"
                src={image}
                alt="Inserted"
              />
            </div>
          ))}
        </div>
      )}

      <div className="text-xs mt-4 text-right text-gray-500">
        {savedEntry && (
          <div>
            Entry saved!
            <br />
            {savedEntry}
          </div>
        )}
      </div>
    </div>
  );
};

export default Compose;
