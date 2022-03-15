import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { gameReducer } from "../reducers/game";
import { questionsReducer } from "../reducers/questions";
import { authReducer } from "../reducers/auth";

const reducers = combineReducers({
  questions: questionsReducer,
  game: gameReducer,
  auth: authReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
