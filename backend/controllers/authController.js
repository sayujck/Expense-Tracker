const users = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: "User already exists" });
        else {
            const user = await users.create({ name, email, password });
            res.status(201).json({ user });
        }

    } catch (error) {
        console.log(error);

    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (!existingUser) return res.status(404).json({ msg: "User doesn't exist" });
        if (password !== existingUser.password)
            return res.status(400).json({
                message: "Invalid credentials"
            });
        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({
            user: existingUser,
            token,
            message: "Login successful"
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports = exports;