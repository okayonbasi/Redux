import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, applyMiddleware, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer
})

const allEnhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
const store = createStore(rootReducer, {
    products:[{
        name:"Samsung",
        type:"TV"
    }],
    user:"Okay"
    },
    allEnhancer
    );




ReactDOM.render(<Provider store={store}><App count={4} /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
