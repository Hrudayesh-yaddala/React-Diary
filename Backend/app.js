const express=require("express");
const mongoose=require("mongoose");
require('dotenv').config();
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors())
const userRouter = require("./routes/userRoute")
const cloudinary = require('cloudinary').v2;
const multer = require('multer');          

cloudinary.config({ 
  cloud_name: 'dk267s51l', 
  api_key: '728372577397244', 
  api_secret: 'gpwMKVwgMflyQIRncoQTmu3mRCg' 
});

const mongoURI=process.env.MONGO_URL
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });


const storage = multer.diskStorage({});
const upload = multer({ storage });

  app.post('/upload', upload.array('images', 5), (req, res) => {
    const files = req.files;
    const uploadedImages = [];
  
    // Upload each image to Cloudinary
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload(file.path, (error, result) => {
            if (error) {
              console.error(error);
              reject('Failed to upload image');
            } else {
              // Add the public URL of the uploaded image to the array
              uploadedImages.push(result.secure_url);
              resolve();
            }
          });
        });
      })
    )
      .then(() => {
        // Return the array of uploaded image URLs in the response
        return res.status(200).json({ images: uploadedImages });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: 'Failed to upload images' });
      });
  });  
app.use("/api/user",userRouter)
app.listen(3000,(req,res)=>{
    console.log("server started in terminal")
})



// mongoose.connect("mongodb+srv://hrutestmail:LPJuiAzvWirfw4b1@react-diary.afoekjs.mongodb.net/React-Diary",{useNewUrlParser: true,useUnifiedTopology: true,w:"majority"});
// mongoose.connect("mongodb+srv://Hrudayesh:Hrudayesh22@e-diary.19t8elh.mongodb.net/E-diary", {useNewUrlParser: true,useUnifiedTopology: true,w:"majority"});


// Configure Cloudinary with your credentials
// cloudinary.config({
//   cloud_name: 'dk267s51l',
//   api_key: '728372577397244',
//   api_secret: 'gpwMKVwgMflyQIRncoQTmu3mRCg',
// });

// // Set up Multer for file uploads
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: 'diary_images', // This is the folder where your images will be stored in Cloudinary
//   allowedFormats: ['jpg', 'png', 'jpeg'],
// });

// const parser = multer({ storage: storage });






