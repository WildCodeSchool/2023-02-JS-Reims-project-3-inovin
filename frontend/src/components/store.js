import { createStore } from "redux";
import glassCardReducer from "./glassCardReducer";

const store = createStore(glassCardReducer);

export default store;
