import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protect = async (req, res, next) => {
  console.log("PROTECT MIDDLEWARE HIT");

  try {
    let token;

    console.log("AUTH HEADER:", req.headers.authorization);

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];

      console.log("TOKEN:", token);

      console.log("SECRET:", process.env.JWT_SECRET);

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      console.log("DECODED:", decoded);

      req.user = await User.findById(decoded.id).select(
        "-password"
      );

      return next();
    }

    return res.status(401).json({
      message: "Not authorized",
    });
  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default protect;