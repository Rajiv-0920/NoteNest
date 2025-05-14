import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcrypt";
import admin from "../config/firebase.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message:
          "All fields are required. Please fill in all the fields and try again.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Password must be at least 6 characters long.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Password and confirm password do not match.",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        success: false,
        error: "Conflict",
        message: "An account with this email already exists.",
      });
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    if (hash) {
      const newUser = new User({ username, email, password: hash });

      if (newUser) {
        const token = generateToken(newUser.id, res);
        await newUser.save();
        return res.status(201).json({
          success: true,
          status: "success",
          message: "User registered successfully",
          data: {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            token,
          },
        });
      } else {
        return res.status(400).json({
          success: false,
          status: "fail",
          message: "Failed to create user. Please provide valid user data.",
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        error: "Internal Error",
        message: "Internal Server Error",
      });
    }
  } catch (error) {
    console.log(`Error in Signup Controller ${error.message}`);
    res.status(500).json({
      success: false,
      status: "Internal",
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message:
          "All fields are required. Please fill in all the fields and try again.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid Email or Password",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const token = generateToken(user._id, res);
      return res.status(201).json({
        success: true,
        status: "success",
        message: "Welcome back! You’ve successfully logged in.",
        data: {
          _id: user._id,
          username: user.username,
          email: user.email,
          token,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "Invalid Email or Password",
      });
    }
  } catch (error) {
    console.log(`Error in Login controller`, error.message);
    res.status(500).json({
      success: false,
      status: "Internal",
      message: "Internal Server Error",
    });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(201).json({
      success: true,
      status: "Success",
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(`Error in Logout controller`, error.message);
    res.status(500).json({
      success: false,
      status: "Internal",
      message: "Internal Server Error",
    });
  }
};

export const googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { email, name, uid } = decodedToken;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        googleId: uid,
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Google login error:", error.message);
    res.status(401).json({ message: "Invalid Firebase token" });
  }
};
