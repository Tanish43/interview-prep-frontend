import { postJsonData } from "@/utils/api";
import { API_ENDPOINTS } from "@/constants/api";

export const loginUser = async (payload) => {
  return await postJsonData(API_ENDPOINTS.LOGIN, payload);
};

export const registerUser = async (payload) => {
  return await postJsonData(API_ENDPOINTS.REGISTER, payload);
};
