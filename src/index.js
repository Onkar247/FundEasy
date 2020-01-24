import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import App from './App'
import OTP from './Components/OTP/OTP';
import Scheme from './Components/Scheme/Scheme';
import Schemecard from './Components/Scheme/Schemecard';
import Notification from './Components/Notification/Notification';
import Nav from './Components/Navbar/Nav'
import Card from './Components/Card/Card';
import Main from './Components/Main/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Card />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
