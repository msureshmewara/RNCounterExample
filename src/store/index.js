import { createStore } from "redux";
//import rootReducer from "../reducers";
import counterReducer from "../reducers/counterReducer";
export default store = createStore(counterReducer);