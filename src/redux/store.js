import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/index";

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(reducer);

sagaMiddleware.run(rootSaga);
export default store;
