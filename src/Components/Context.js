import { createContext } from "react";

export const CurrentCityContext = createContext(
  localStorage.getItem("ACTIVE_LONG_LAT")
);

export const CityDataContext = createContext({});
