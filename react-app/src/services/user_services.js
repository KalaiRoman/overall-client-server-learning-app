import GetMethod from "../apimethods/GetMethod";
import Apis from "../apis/Apis";

export const getUserData = () => {
  try {
    const response = GetMethod(Apis?.getApi);

    if (response) {
      return response;
    }
  } catch (error) {}
};
