const localStorageMiddleware = store => next => action => {
  next(action);
  sessionStorage.setItem("store", JSON.stringify(store.getState()));
};

export const initializeState = () => {
  return JSON.parse(sessionStorage.getItem("store")) || undefined;
};
export default localStorageMiddleware;
