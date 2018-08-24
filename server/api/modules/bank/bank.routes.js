import { Router } from "express";
import {
  requiresToBeLoggedIn,
  requiresNotToBeLoggedIn
} from "../../../middleware/auth";
import * as bankHandlers from "./bank.handlers";

export const init = api => {
  const router = new Router();

  router.get("/rate", requiresToBeLoggedIn, bankHandlers.rateCounter);

  api.use("/bank", router);
};
