import React from 'react';
import ReactDOM from "react-dom";
// import {Provider} from "react-redux";
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history"
// import configureStore from "./store";

const history = createBrowserHistory();
// const store = configureStore();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// const history = createBrowserHistory();
// render(
//     <Provider store={store}>
//         <App history={history}/>
//     </Provider>,
//     document.querySelector('#app')
// );

// render(
//     <Provider store={store}>
//         <App history={history}/>
//     </Provider>,
//     document.querySelector('#app')
// );


serviceWorker.unregister();
