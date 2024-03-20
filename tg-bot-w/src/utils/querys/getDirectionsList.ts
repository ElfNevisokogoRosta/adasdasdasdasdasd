import { axiosRequest } from "../axiosReques";

export const getDirectionsList = async () => {
  const result = await axiosRequest
    .get("directions")
    .then((r) => r.data)
    .catch((e) => console.log(e));
  return result;
};
