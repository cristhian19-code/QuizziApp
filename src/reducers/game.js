import { types } from "../types/types";

const initialState = {
  playGame: false,
  changePage: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.playGame:
      return {
        ...state,
        playGame: true,
      };
    case types.stopGame:
      return {
        ...state,
        playGame: false,
      };
    case types.changePage:
      return {
        ...state,
        changePage: true,
      };
    case types.stopChangePage:
      return {
        ...state,
        changePage: false,
      };
    default:
      return state;
  }
};
