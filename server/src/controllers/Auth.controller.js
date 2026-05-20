import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
  try {
    const { name, email, password, role, avatar } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      avatar,
      isVerified: false,
    });
    await newUser.save();

    const emailVerificationToken = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // await sendEmail({
    //   to: newUser.email,
    //   subject: "Verify your email",
    //   html: `<h1>Email Verification</h1><p>Click the link below to verify your email:</p><a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>`,
    // });
    return res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        token: emailVerificationToken,
        user: { id: newUser._id, name: newUser.name, email: newUser.email },
      });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// export async function verifyEmail(req, res) {
//   try {
//     const token = req.query.token || req.params.token;
//     if (!token) {
//       return res.status(400).json({ message: "Verification token is required" });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       const user = await User.findById(decoded.userId);
//       if (!user) {
//         return res.status(400).json({ message: "Invalid verification token" });
//       }
//       user.isVerified = true;
//       await user.save();
//       const html = `<h1>Email Verified</h1><p>Your email has been successfully verified. You can now log in to your account.</p>`;
//       return res.status(200).send(html);
//     } catch (error) {
//       return res.status(400).json({ message: "Invalid verification token" });
//     }
//   } catch (error) {
//     console.error("Error verifying email:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    if (!user.isVerified) {
      return res.status(403).json({ message: "Please verify your email first" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export async function logoutUser(req, res) {
  try {
    // Invalidate the token on the client side by clearing it from storage
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error logging out user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}