import mongoose, { Schema } from "mongoose";

const transferSchema = new Schema({
  from: {
    type: String,
    ref: "User"
  },
  to: {
    type: String,
    ref: "User"
  },
  amount: {
    type: Number
  },
  date: {
    type: Number,
    default: Date.now()
  }
});

mongoose.model("Transfer", transferSchema);
