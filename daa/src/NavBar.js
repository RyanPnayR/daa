import React, { Component } from 'react';

export class NavBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div> 
            <nav className="nav-extended daa-red page-header">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Dayton Area Amusements LLC.</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><i className="large material-icons">search</i></li>
        <li><input type="search"/></li>
        <li><a href="#"><i className="large material-icons">account_circle</i></a></li>
        <li><a href="#"><i className="large material-icons">alarm</i></a></li> 
        {this.props.children}
      </ul>

    </div>
  </nav>
  </div>);
    };
}