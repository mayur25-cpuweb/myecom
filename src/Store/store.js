import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {user} from '../reducers/userReducer';


var rootReducer = combineReducers({user});

var store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );



export default store;

