import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import Card from './Card';
import Users from './Users'


ReactDOM.render(<Card />, document.getElementById('root')); // see public/index.html file
ReactDOM.render(<Users />, document.getElementById('root2')); // see public/index.html file



