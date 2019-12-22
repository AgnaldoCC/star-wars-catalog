import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import MainReducer from '../Reducers/mainReducer'

const store = applyMiddleware(promise, thunk)(createStore)(MainReducer)

export default store;