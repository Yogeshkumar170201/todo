import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {  
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

const dbConnect = async () => {
  if (cached.con !== null) {
    return cached.con;
  }
  // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.con = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.con;
};

export default dbConnect;
