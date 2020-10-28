import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './products';
import categories from './categories';
import cart from './cart';
import thunk from 'redux-thunk';
let reducers = combineReducers({ products, categories, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools(), applyMiddleware(thunk));
};

export default store();
