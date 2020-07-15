import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';

import * as serviceWorker from './serviceWorker';


// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
import { Router, Route, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'


const browserHistory = useRouterHistory(createHistory)({ basename: '/sample-app' })
const historyRouterMiddleware = routerMiddleware(browserHistory)

const history = useRouterHistory(createHistory)({
basename: '/base-path'
})

ReactDOM.render(
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App } />
    </Router>,
    document.getElementById('app')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
