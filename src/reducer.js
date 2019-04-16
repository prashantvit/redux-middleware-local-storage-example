import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from "./types";

const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case `${INCREMENT_ASYNC}_FULFILLED`:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

export default counterReducer;
