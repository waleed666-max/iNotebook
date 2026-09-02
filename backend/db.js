/*const mongoose = require('mongoose');
require('dotenv').config(); 
  //for local use
// const  = 'mongodb:///inotebook';
//const mongoURI = 'mongodb+srv:env';
const mongoURI = process.env.MONGO_URI;
const connectToMongo = () => {
  mongoose.connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

module.exports = connectToMongo; // ✅ SAME NAME */

const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    if (!mongoURI) {
      console.error("❌ MONGO_URI is undefined!");
      console.error("❌ Make sure .env file exists in backend folder");
      process.exit(1);
    }

    console.log("🔄 Connecting to MongoDB...");
    
    

await mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 30000,
  family: 4
});




    
    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
