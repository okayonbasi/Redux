import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
