import mongoose from "mongoose";

const User = mongoose.model("User");

export const makeTransaction = (req, res, next) => {
  const { userId: user } = req.session;
  const { amount, to } = req.body;
  User.findOneAndUpdate(
    { _id: user },
    { $set: { balance: req.fromBalance - parseInt(amount) } },
    { new: true }
  )
    .then(user => {
      User.findOneAndUpdate(
        { _id: to },
        { $set: { balance: req.toBalance + parseInt(amount) } },
        { new: true }
      )
        .then(user => {
          next();
        })
        .catch(error => {
          return res
            .status(200)
            .json({ msg: "Smth went wrong", receiverID: to });
        });
    })
    .catch(error => {
      return res.status(200).json({ msg: "Smth went wrong", receiverID: to });
    });
};
