import { INCREMENT, INCREMENT_ASYNC, DECREMENT } from "./types";
export const increment = () => ({ type: INCREMENT });
export const incrementAfter5Seconds = () => ({
  type: INCREMENT_ASYNC,
  payload: new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  })
});
export const decrement = () => ({ type: DECREMENT });
