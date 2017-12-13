import React, { Component } from 'react';
import { NavBar } from '../UI/NavBar';
import { Header } from '../UI/Header';
import { NavBarBottom } from '../UI/NavBarBottom';
import { Footer } from '../UI/Footer';
import { Cart } from '../UI/Cart';
import ProductPage  from './ProductPage';

export class Layout extends Component {
    render() {
        return <div>
            <ProductPage />
        </div>;
    }
}

// ReactDOM.render(<Header />, document.getElementById('Header'));
// ReactDOM.render(<NavBar> {cart} </NavBar>, document.getElementById('NavBar'));
// ReactDOM.render(<NavBarBottom />, document.getElementById('NavBarBottom'));
// ReactDOM.render(<Footer />, document.getElementById('Footer'));