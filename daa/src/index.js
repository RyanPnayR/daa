import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Product } from './Product';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Product />, document.getElementById('froot'));
registerServiceWorker();
