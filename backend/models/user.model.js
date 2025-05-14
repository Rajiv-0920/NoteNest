import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    googleId: { type: String, unique: true },
    password: { type: String, minLength: 6 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
