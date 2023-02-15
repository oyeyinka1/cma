const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/sendEmail");
const verifyTokenModel = require("../models/verifyTokenModel");
const generateVerifyToken = require("../auth/generateVerifiyToken");
require("dotenv").config();

// @description register a user
//@method POST localhost:5000/api/users/register
const registerUser = async (req, res) => {
  //destruction data
  const {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    country,
    state,
    city,
    username,
    email,
    phone,
    password,
    photo,
  } = req.body;

  try {
    //check if email exists in database
    const userExists = await UserModel.findOne({ email });

    //if user exists
    if (userExists) {
      res.status(400).send({ message: "User already exists" });
      // throw new Error("User already exists");
    }

    //if user does not exsits{

    //generate password
    const salt = await bcrypt.genSalt(10);

    //hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = await UserModel.create({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      country,
      state,
      city,
      username,
      email,
      phone,
      password: hashedPassword,
      photo,
    });

    //if user could not be created
    if (!newUser) {
      res.status(400).send({ message: "Invalid credentials" });
      // throw new Error("User could not be created");
    }
    //if user created successfully

    //generate Token
    const verificationToken = await generateVerifyToken(newUser._id);

    //store verification token and userId in database
    const token = await verifyTokenModel.create({
      userId: newUser._id,
      token: verificationToken,
    });

    //structure http://localhost:3000/user/:userId/verify/:token
    const verificationUrl = `<a href='http://localhost:3000/user/${newUser._id}/verify/${verificationToken}'>verify your email</a>`;

    // let emailData = {
    //   email:newUser.email,
    //   subject: "Account created",
    //   text: `Hello ${newUser.firstName} ${newUser.lasthfName}, your account has been created. ${verificationUrl} to login.`,
    // };

    //send email
    sendEmail(
      newUser.email,
      "Account created",
      `Hello ${newUser.firstName} ${newUser.lastName}, your account has been created.Please ${verificationUrl} to login.`
    );

    return res.status(201).json({ message: "User registered", newUser, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
// @description verify a user
//@method POST localhost:5000/api/users/:userId/verify/:token
const verifyUser = async (req, res) => {
  try {
    const { userId, token } = req.params;

    //check if token exists
    const foundToken = await verifyTokenModel.findOne({ token });

    //check if id exists
    const foundUser = await UserModel.findById(userId);

    if (!foundToken || !foundUser) {
      res.status(400).send({ message: "User not found" });
      throw new Error("Invalid token");
    }

    //if token and user exists
    if (!foundToken.userId.toString()!== foundUser._id.toString()) {
      res.status(400).send({ message: "Inavlid token" });
      throw new Error("Invalid token");
    }

    //if id does not exists
    res.status(400).send({ message: "User not found" });
    throw new Error("User not found");

    res.json({ userId, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

// @description login a user
//@method POST localhost:5000/api/users/login
const loginUser = (req, res) => {
  res.json({ message: "User loggedin" });
};

module.exports = { registerUser, verifyUser, loginUser };
