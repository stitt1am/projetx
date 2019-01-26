import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history"
import configureStore from "./store";

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.querySelector('#root')
);


serviceWorker.unregister();
