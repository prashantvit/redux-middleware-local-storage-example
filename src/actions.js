import { INCREMENT, INCREMENT_ASYNC, DECREMENT } from "./types";
export const increment = () => ({ type: INCREMENT });
export const incrementAsync = () => ({
  type: INCREMENT_ASYNC,
  payload: new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 0);
  })
});
export const decrement = () => ({ type: DECREMENT });
