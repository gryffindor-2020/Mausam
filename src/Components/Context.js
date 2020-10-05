import { createContext } from "react";

export const CityContext = createContext(
  localStorage.getItem("ACTIVE_LONG_LAT")
);

export const CityDataContext = createContext({});
