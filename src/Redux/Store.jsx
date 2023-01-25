import {createStore, combineReducers, applyMiddleware, compose} from "redux";

import { cartReducer } from "./Cart/Reducer";
import { shippingReducer } from "./ShippingAddress/Reducer";
import { loginReducer } from "./LoginUserData/Reducer";
import { categoryReducer } from "./CategoryData/Reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const rootReducer = combineReducers({
   cart: cartReducer,
   shippingAddress : shippingReducer,
   loginUserData: loginReducer,
   categoryReducer:categoryReducer
});

export const store = createStore(rootReducer, enhancer);