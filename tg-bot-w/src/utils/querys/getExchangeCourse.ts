import { axiosRequest } from "../axiosReques";

export const getExchangeCourse = async () => {
  try {
    const response = await axiosRequest.get(`directions/BTC/P24UAH`);
    return response.data;
  } catch (error) {
    console.error("Помилка у функції getExchangeCourse:", error);
    throw error;
  }
};
