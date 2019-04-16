const localStorageMiddleware = store => next => action => {
  next(action);
  sessionStorage.setItem("store", JSON.stringify(store.getState()));
};

export const run = () => {
  return JSON.parse(sessionStorage.getItem("store"));
};

export default localStorageMiddleware;