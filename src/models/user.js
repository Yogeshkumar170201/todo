import mongoose from 'mongoose';

// Define the schema
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model using the schema
const User = mongoose.models.User || mongoose.model("User", user);

export default User;
