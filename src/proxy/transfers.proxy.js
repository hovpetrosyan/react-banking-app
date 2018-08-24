import { makeRequest } from "../utils/fetchUtils";
import HttpMethods from "../constants/HttpMethods";

/**
 * transfer api proxy functions
 */
const EMPTY_OBJECT = {};
const USER_PROXY_URI = "/api/transfers";

export const newTransfer = (to, amount) =>
  makeRequest(`${USER_PROXY_URI}/new`, HttpMethods.POST, EMPTY_OBJECT, {
    to,
    amount
  });

export const getAllTransfers = id =>
  makeRequest(`${USER_PROXY_URI}/transfers/${id}`);
