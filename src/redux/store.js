/* eslint-disable import/no-anonymous-default-export */
import { createStore,applyMiddleware } from "redux";
import { persistStore } from 'redux-persist'; // for loaclStorage
import  logger from 'redux-logger'
import rootReducer from "./root-reducer";

// remove logger when production
const middlewares = []
if (process.env.NODE_ENV === 'development'){
   middlewares.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);// for loaclStorage

export default { store, persistStore };