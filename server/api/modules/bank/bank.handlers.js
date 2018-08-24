import rn from "random-number";
const options = {
  min: 0.82,
  max: 0.89
};
export const rateCounter = (req, res, next) => {
  const gen = rn.generator(options);
  res.status(200).json({ rate: gen() });
};
