import qs from "qs";
import request from "../utils/request";

export function signIn(data) {
  const options = qs.stringify(data);

  return request({
    url: "/authenticateByEmail",
    method: "post",
    data: options,
  });
}

export function signUp(data) {
  const options = qs.stringify(data);

  return request({
    url: "/registerByEmail ",
    method: "POST",
    data: options,
  });
}

export function checkRegisterByEmail(data) {
  const options = qs.stringify(data);

  return request({
    url: "/checkRegisterByEmail ",
    method: "POST",
    data: options,
  });
}
export function sendSms(data) {
  const options = qs.stringify(data);

  return request({
    url: "/sendSms ",
    method: "POST",
    data: options,
  });
}

export function sendCode(data) {
  const options = qs.stringify(data);

  return request({
    url: "/sendCode ",
    method: "POST",
    data: options,
  });
}

export function recover(data) {
  const options = qs.stringify(data);

  return request({
    url: "/resendPassword",
    method: "post",
    data: options,
  });
}

export function registerByEmailSoc(data) {
  const options = qs.stringify(data);

  return request({
    url: "/registerByEmailSoc",
    method: "post",
    data: options,
  });
}

export function resetPassword(data) {
  const options = qs.stringify(data);

  return request({
    url: "/resetPassword",
    method: "post",
    data: options,
  });
}
