import { createStore } from "redux";
import counterReducer from "./src/reducer/counterReducer"
const store = createStore(counterReducer);

export default store;
