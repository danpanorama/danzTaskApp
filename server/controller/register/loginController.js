// auth/authController.js

const User = require("../models/User");
const { checkPassword, hashPassport } = require("./bcrypt");
const { makeToken } = require("./jwt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "יש להזין אימייל וסיסמה", header: "חסר מידע" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "האימייל או הסיסמה שגויים", header: "התחברות נכשלה" });
    }

    const isMatch = await checkPassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "האימייל או הסיסמה שגויים", header: "התחברות נכשלה" });
    }

    const token = await makeToken({ _id: user._id, email: user.email });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      message: "התחברות בוצעה בהצלחה",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "שגיאת שרת", header: "שגיאה כללית" });
  }
};
const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "נא למלא את כל השדות", header: "חסר מידע" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "האימייל כבר רשום במערכת", header: "כפילות" });
    }

    const hashedPassword = await hashPassport(password);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });

    await newUser.save();

    const token = await makeToken({ _id: newUser._id, email: newUser.email });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      message: "נרשמת בהצלחה",
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "שגיאת שרת", header: "שגיאה כללית" });
  }
};
module.exports = { login, register };
