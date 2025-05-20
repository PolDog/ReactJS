import { combineReducers } from 'redux';
import { itemReducer } from '../reducers/itemReducer';
import { cartReducer } from '../reducers/cartReducer';

export const rootReducer = combineReducers({
  item: itemReducer,
  cart: cartReducer,
});



