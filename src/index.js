import React              from 'react';
import ReactDOM           from 'react-dom';
import AppRoot            from './components/app-root/app-root.js';
import * as serviceWorker from './serviceWorker';

// Here I am, learning to love the bomb.
ReactDOM.render( <AppRoot />, document.getElementById( 'app-root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// todo look into this, but don't do yet
serviceWorker.unregister();
