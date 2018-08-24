import mongoose from "mongoose";

const Transfer = mongoose.model("Transfer");

const populateOwnerConfig = {
  path: "owner",
  select: "-password"
};
const populateUserConfig = {
  path: "user",
  select: "-password"
};
const populateProductConfig = {
  path: "product"
};

export const addTransfer = (req, res, next) => {
  const { userId: from } = req.session;
  const { to, amount } = req.body;
  const transfer = new Transfer({
    from,
    to,
    amount,
    date: Date.now()
  });
  transfer
    .save()
    .then(transfer => res.status(200).json({ transfer }))
    .catch(error => next(error));
};

export const getTransfers = (req, res, next) => {
  const { userId: user } = req.session;
  let filter;
  if (req.params.id == 1) {
    Transfer.find({ from: user })
      .sort({ _id: -1 })
      .then(transfers => {
        res.status(200).json({ transfers });
      })
      .catch(error => next(error));
  } else if (req.params.id == 2) {
    Transfer.find({ to: user })
      .sort({ _id: -1 })
      .then(transfers => {
        res.status(200).json({ transfers });
      })
      .catch(error => next(error));
  } else {
    res.end();
  }
};
