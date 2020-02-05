import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pessoasReducer from '../reducers/pessoas';
import filtersReducer from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({
       pessoas: pessoasReducer,
       filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
