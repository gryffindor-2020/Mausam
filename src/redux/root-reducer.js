import { combineReducers } from "redux";
import cityReducer from "./city/city.reducer";
export default combineReducers({
  city: cityReducer,
});
