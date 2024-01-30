// import { Express } from "express";
import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";

const collectionName = "users";

const User = mongoose.model(
  collectionName,
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      require: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Username must be at least 3 characters",
      },
    },
    Email: {
      type: String,
      require: true,
      validate: {
        validator: (value) => isEmail,
        message: "Email is not correct format",
      },
    },
    password: {
      type: String,
      require: true,
    },
  })
);

export default User;
