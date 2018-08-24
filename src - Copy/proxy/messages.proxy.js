import { makeRequest } from "../utils/fetchUtils";
import HttpMethods from "../constants/HttpMethods";

/**
 * order api proxy functions
 */
const EMPTY_OBJECT = {};
const MESSAGE_PROXY_URI = "/api/messages";

export const sendMessage = (to, payload) =>
  makeRequest(
    `${MESSAGE_PROXY_URI}/new_message`,
    HttpMethods.POST,
    EMPTY_OBJECT,
    {
      to,
      payload
    }
  );

export const getMessages = contact =>
  makeRequest(
    `${MESSAGE_PROXY_URI}/get_messages`,
    HttpMethods.POST,
    EMPTY_OBJECT,
    {
      contact
    }
  );
