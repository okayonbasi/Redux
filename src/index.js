import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
function productReducer(state = [], action){
    return state;
}
function userReducer(state="", action){
    switch(action.type){
        case "userUpdate":
            return action.payload;
          default:  return state;
        }
}

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer
})
const store = createStore(rootReducer, {
    products:[{
        name:"Samsung",
        type:"TV"
    }],
    user:"Okay"
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

const updateUserAction = {
    type: "userUpdate",
    payload:{
        user:"Onur"
    }
}

store.dispatch(updateUserAction);

console.log(store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
