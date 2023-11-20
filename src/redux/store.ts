import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import rootSaga from "./sagas";

let sagamiddleware = createSagaMiddleware();
const middleware = [sagamiddleware];

export default configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getdefaultMiddleware) => {
    return getdefaultMiddleware().concat(middleware);
  }
});

sagamiddleware.run(rootSaga);
