import mongoose from "mongoose";

const User = mongoose.model("User");

export const checkBankID = (req, res, next) => {
  const { to } = req.body;
  const { userId } = req.session;
  if (userId === to) {
    return res.status(200).json({ msg: "Invalid ID : It's your own" });
  }
  if (to)
    User.findById(to)
      .then(user => {
        req.toBalance = user.balance;
        next();
      })
      .catch(error => {
        return res.status(200).json({ msg: "Invalid ID", receiverID: to });
      });
};
