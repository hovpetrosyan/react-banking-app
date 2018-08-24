import { check } from "express-validator/check";

export const validateTransferItems = [
  check("to")
    .exists()
    .isLength({ min: 1 })
    .withMessage("Please provide productId"),
  check("amount")
    .exists()
    .isLength({ min: 1 })
    .withMessage("Please provide ownerId."),
  check("description")
    .exists()
    .isLength({ min: 1 })
    .withMessage("Please provide description.")
];
