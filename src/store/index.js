import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authors from './authors/reducer';
import courses from './courses/reducer';
import user from './user/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  authors,
  courses,
  user,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.__store__ = store;

export default store;
