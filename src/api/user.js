import qs from "qs";
import request from "../utils/request";

export function getProfile() {
  return request({
    url: "/getProfile",
    method: "get",
  });
}

export function updateProfile(data) {
  const options = qs.stringify(data);

  return request({
    url: "/updateProfile",
    method: "post",
    data: options,
  });
}

export function subscribe(data) {
  const options = qs.stringify(data);

  return request({
    url: "/subscribe",
    method: "post",
    data: options,
  });
}

