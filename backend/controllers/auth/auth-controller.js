import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/Admin.js";
import dotenv from "dotenv";
dotenv.config();

const CLIENT_SECRET_KEY = process.env.CLIENT_SECRET_KEY;

//Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    const user = await User.findOne({ email });
    res.status(200).json({
      success: true,
      message: "Registration successful Please login to continue",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

//Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect user Details! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        name: checkUser.name,
      },
      CLIENT_SECRET_KEY,
      { expiresIn: "60m" }
    );
    // change secure to true in production
    // res.cookie("token", token, { httpOnly: true, secure: true })
    res.cookie("token", token, { httpOnly: true, secure: true }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        name: checkUser.name,
      },
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

//Logout
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

//Auth Middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });

  try {
    const decoded = jwt.verify(token, CLIENT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }
};

export { registerUser, loginUser, logoutUser, authMiddleware };
