import { combineReducers } from "redux";

export const addWalletReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_WALLET":
      return [
        ...state,
        { wallet: action.payload.wallet, id: action.payload.id },
      ];
    case "DELETE_WALLET":
      return [...state].filter((w) => w.wallet !== action.payload);
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  addWalletReducer,
});
