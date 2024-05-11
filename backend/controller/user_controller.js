const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config()

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ err: "Error signing in" });
  }
};

const getUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.status(201).json(users)
    }
    catch(err){
        res.status(500).json({err: "Unable to get users"})
    }
}

const loginUser = async(req,res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error: "Invalid credentials"})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({error: "Invalid credentials"});
        }
        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: "1hr"})
        res.json({message: "Login successfully"});
    }
    catch(error){
        res.status(500).json({error: "Error logging in"});
    }
}

module.exports = {registerUser, getUsers, loginUser};