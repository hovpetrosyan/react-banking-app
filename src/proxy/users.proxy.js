import { makeRequest } from "../utils/fetchUtils";
import HttpMethods from "../constants/HttpMethods";

/**
 * user api proxy functions
 */
const EMPTY_OBJECT = {};
const USER_PROXY_URI = "/api/users";

export const userLogin = (username, password) =>
  makeRequest(`${USER_PROXY_URI}/login`, HttpMethods.POST, EMPTY_OBJECT, {
    username,
    password
  });

export const userLogout = () =>
  makeRequest(`${USER_PROXY_URI}/logout`, HttpMethods.POST);

export const isAuthenticated = () =>
  makeRequest(`${USER_PROXY_URI}/isLoggedIn`);

export const userRegister = (username, password, email) =>
  makeRequest(`${USER_PROXY_URI}/register`, HttpMethods.POST, EMPTY_OBJECT, {
    username,
    password,
    email
  });

export const forgotPassword = (username, email) =>
  makeRequest(
    `${USER_PROXY_URI}/recoverPassword`,
    HttpMethods.POST,
    EMPTY_OBJECT,
    {
      username,
      email
    }
  );

export const changePassword = password =>
  makeRequest(
    `${USER_PROXY_URI}/changePassword`,
    HttpMethods.POST,
    EMPTY_OBJECT,
    { password }
  );

export const getAllContacts = () => makeRequest(`${USER_PROXY_URI}/contacts`);

export const getUserAccount = () => makeRequest(`${USER_PROXY_URI}/account`);
