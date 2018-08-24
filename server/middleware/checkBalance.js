import mongoose from "mongoose";

const User = mongoose.model("User");

export const checkBalance = (req, res, next) => {
  const { userId: user } = req.session;
  const { amount, to } = req.body;
  User.findById(user)
    .then(user => {
      if (amount <= 0) {
        return res.status(200).json({ msg: "Transaction can't be done" });
      }
      if (user.balance > amount) {
        req.fromBalance = user.balance;
        next();
      } else {
        return res.status(200).json({ msg: "You haven't enough money" });
      }
    })
    .catch(error => {
      return res.status(200).json({ msg: "Smth Went Wrong", receiverID: to });
    });
};
