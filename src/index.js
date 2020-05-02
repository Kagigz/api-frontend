import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';


import App from './components/App';
import LoadingScreen from './components/LoadingScreen'
import Results from './components/Results'

import './css/index.scss';

const routing = (
<Router>
<div>
<Route exact path="/" component={App} />
<Route path="/loading" component={LoadingScreen} />
<Route path="/results" component={Results} />
</div>
</Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
