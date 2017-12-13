import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductPage } from './ProductPage';
import registerServiceWorker from './registerServiceWorker';
import { NavBar } from './NavBar';
import { Header } from './Header';
import { NavBarBottom } from './NavBarBottom';
import { Footer } from './Footer';
import { Cart } from './Cart';

const cart =  <li ><Cart> <a href="#"><i className="large material-icons">add_shopping_cart</i></a></Cart> </li>;

ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<NavBar> {cart} </NavBar>, document.getElementById('NavBar'));
ReactDOM.render(<NavBarBottom />, document.getElementById('NavBarBottom'));
ReactDOM.render(<ProductPage onAddCart />, document.getElementById('Products'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));
registerServiceWorker();
