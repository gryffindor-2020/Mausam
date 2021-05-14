import { CityActionTypes } from "./city.types";

export const setCurrentCity = (city) => ({
  type: CityActionTypes.SET_CURRENT_CITY,
  payload: city,
});
