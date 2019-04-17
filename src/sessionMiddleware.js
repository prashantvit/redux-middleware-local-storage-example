const localStorageMiddleware = store => next => action => {
  next(action);
  sessionStorage.setItem("store", JSON.stringify(store.getState()));
};

export const applySession = (reducer, enhancer) => {
  const store = JSON.parse(sessionStorage.getItem("store")) || undefined;
  const storeParams = [reducer];
  if (store) {
    storeParams.push(store);
  }
  storeParams.push(enhancer);
  return storeParams;
};
export default localStorageMiddleware;
