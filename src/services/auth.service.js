import { getData, postJsonData } from "@/utils/api";
import { API_ENDPOINTS } from "@/constants/api";

export const loginUser = async (payload) => {
  const endpoint = process.env.NEXT_PUBLIC_API_BASE_URL + API_ENDPOINTS.LOGIN;
  return await postJsonData(endpoint, payload);
};

export const registerUser = async (payload) => {
  const endpoint =
    process.env.NEXT_PUBLIC_API_BASE_URL + API_ENDPOINTS.REGISTER;
  return await postJsonData(endpoint, payload);
};

export const getAuthToken = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  return auth?.token;
};

export const getUserInfo = async () => {
  const token = getAuthToken();
  const endpoint =
    process.env.NEXT_PUBLIC_API_BASE_URL + API_ENDPOINTS.USER_INFO;
  return await getData(
    endpoint,
    {},
    {
      Authorization: `Bearer ${token}`,
    },
  );
};
