import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import reduxThunk from "redux-thunk";

let reducer = combineReducers({});

// 创建的仓库
let store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;
