import { configureStore } from "@reduxjs/toolkit";

// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  //turn off serializable check from default middleware to stop firebase error as return is class based object
  //concat part adds our own middleware to array of default middleware
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // }).concat(middleWares),

  //set that you do not get a non serializable value
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// export const persistor = persistStore(store);
