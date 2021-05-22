import { CityActionTypes } from "./city.types";

const INITIAL_STATE = null;
const cityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CityActionTypes.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
