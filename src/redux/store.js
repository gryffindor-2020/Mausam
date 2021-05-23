import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer.js";

const middlewares = [logger];
if (process.env.NODE_ENV !== "development") middlewares.length = 0;
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
