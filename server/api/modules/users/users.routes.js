import { Router } from "express";
import {
  requiresToBeLoggedIn,
  requiresNotToBeLoggedIn
} from "../../../middleware/auth";
import { checkExpressValidator } from "../../../middleware/validator";
import * as usersHandlers from "./users.handlers";
import * as usersValidator from "./users.validator";

export const init = api => {
  const router = new Router();

  router.post(
    "/register",
    requiresNotToBeLoggedIn,
    usersValidator.validateUserRegister,
    checkExpressValidator,
    usersHandlers.userRegister
  );

  router.post(
    "/login",
    requiresNotToBeLoggedIn,
    usersValidator.validateUserLogin,
    checkExpressValidator,
    usersHandlers.userLogin
  );

  router.post("/logout", requiresToBeLoggedIn, usersHandlers.userLogout);
  router.post(
    "/recoverPassword",
    requiresNotToBeLoggedIn,
    usersHandlers.recoverPassword
  );
  router.post(
    "/changePassword",
    requiresToBeLoggedIn,
    usersHandlers.changePassword
  );
  router.get("/contacts", requiresToBeLoggedIn, usersHandlers.getAllUsers);
  router.get("/isLoggedIn", usersHandlers.userCheckLoggedIn);

  router.get("/account", requiresToBeLoggedIn, usersHandlers.getAccount);

  api.use("/users", router);
};
