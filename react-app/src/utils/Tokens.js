// get token
import Cookies from "js-cookie";
export const getToken = async () => {
  return Cookies.get("token");
};

export const setToken = async (paramsToken) => {
  return Cookies.set("token", paramsToken, {
    expires: 1,
    secure: true,
    path: "/",
    sameSite: "strict",
  });
};

export const removeToken = async () => {
  return Cookies.remove("token", { path: "/" });
};
