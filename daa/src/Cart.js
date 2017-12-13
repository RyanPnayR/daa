import React, { Component } from 'react';

export class Cart extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert("check me out! ;)");
    }

    render() {
        return <div onClick={this.handleClick.bind(this)}>{this.props.children}</div>;
    }
}