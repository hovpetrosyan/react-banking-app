import { Router } from "express";
import { checkBankID } from "../../../middleware/checkID";
import { checkBalance } from "../../../middleware/checkBalance";
import { makeTransaction } from "../../../middleware/makeTransaction";
import {
  requiresToBeLoggedIn,
  requiresNotToBeLoggedIn
} from "../../../middleware/auth";
//import { checkExpressValidator } from "../../../middleware/validator";
import * as transfersHandlers from "./transfers.handlers";
//import * as transfersValidator from "./transfers.validator";

export const init = api => {
  const router = new Router();

  router.get(
    "/transfers/:id",
    requiresToBeLoggedIn,
    transfersHandlers.getTransfers
  );
  router.post(
    "/new",
    requiresToBeLoggedIn,
    checkBankID,
    checkBalance,
    makeTransaction,
    transfersHandlers.addTransfer
  );

  api.use("/transfers", router);
};
