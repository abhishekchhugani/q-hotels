//This is our root reducer.

import * as actions from "./action";

const initialState = {
  hotels: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === actions.GET_HOTELS) {
    return { hotels: action.payload };
  }
  return state;
}

export default rootReducer;
