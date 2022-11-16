import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { UnAuthenticatedError } from "../errors/index.js";

// authenticating user
export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId };

    const currentUser = await User.findById(payload.userId);
    if (!currentUser) {
      throw new UnAuthenticatedError("The user belonging to this token does no longer exist.");
    }
    req.user = { role: currentUser.role, ...req.user };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export const restrictTo = (...roles) => {

  return (req, res, next) => {
    // roles ['admin', 'user']
    if (!roles.includes(req.user.role)) {
      return next(
        new UnAuthenticatedError('You do not have permission to perform this action')
      );
    }

    next();
  };
};
