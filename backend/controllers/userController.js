const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// AES Encryption, switch logins and creates use to use
const crypto = require("crypto");
const AES = require("crypto-js/aes");

// @desc Register a new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill out all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Generate a random encryption key
  const encryptionKey = crypto.randomBytes(32);

  // Encrypt the user's information using AES
  const encryptedName = AES.encrypt(
    name,
    encryptionKey.toString("base64")
  ).toString();
  const encryptedEmail = AES.encrypt(
    email,
    encryptionKey.toString("base64")
  ).toString();
  const encryptedPassword = AES.encrypt(
    hashedPassword,
    encryptionKey.toString("base64")
  ).toString();

  // Create user
  // COMMENT OUT TO USE AES ENCRYPTION
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    const role = user.get("role");
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// UNCOMMENT THIS TO USE AES ENCRYPTION
//   // Create user
//   const user = await User.create({
//     name: encryptedName,
//     email: encryptedEmail,
//     password: encryptedPassword,
//     encryptionKey: encryptionKey.toString("base64"), // Store the encryption key in the database as well
//   });

//   if (user) {
//     const role = user.get("role");
//     res.status(201).json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid user data");
//   }
// });

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // COMMENT OUT TO USE AES ENCRYPTION
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// UNCOMMENT THIS TO USE AES ENCRYPTION
//   if (user) {
//     const bytesName = CryptoJS.AES.decrypt(user.name, user.encryptionKey);
//     const decryptedName = bytesName.toString(CryptoJS.enc.Utf8);

//     const bytesEmail = CryptoJS.AES.decrypt(user.email, user.encryptionKey);
//     const decryptedEmail = bytesEmail.toString(CryptoJS.enc.Utf8);

//     const bytesPassword = CryptoJS.AES.decrypt(
//       user.password,
//       user.encryptionKey
//     );
//     const decryptedPassword = bytesPassword.toString(CryptoJS.enc.Utf8);

//     const isMatch = await bcrypt.compare(password, decryptedPassword);
//     if (isMatch) {
//       res.json({
//         _id: user.id,
//         name: decryptedName,
//         email: decryptedEmail,
//         role: user.role,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid email or password");
//     }
//   } else {
//     res.status(400);
//     throw new Error("Invalid email or password");
//   }
// });

// @desc Get user data
// @route GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
  console.log(req.user);
  res.status(200).json(req.user);
});

// Generate JWT token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
