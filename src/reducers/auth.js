import { types } from "../types/types";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startLogin:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
