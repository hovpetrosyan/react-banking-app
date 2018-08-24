import { makeRequest } from "../utils/fetchUtils";
import HttpMethods from "../constants/HttpMethods";

/**
 * bank api proxy functions
 */
const EMPTY_OBJECT = {};
const USER_PROXY_URI = "/api/bank";

export const getExchangeRate = () => makeRequest(`${USER_PROXY_URI}/rate`);
