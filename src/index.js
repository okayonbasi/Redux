import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';

function productReducer(state = [], action){
    return state;
}
function userReducer(state="", action){
    return state;
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
});
console.log(store.getState())
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
