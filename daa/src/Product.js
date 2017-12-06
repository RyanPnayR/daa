import React, { Component } from 'react';
import { parse } from 'path';

function parseJSON(response) {
    return response.json();
  }

export class Product extends Component {
    constructor(props){
        super(props);
        this.state = {products:[]};
        this.getProducts = this.getProducts.bind(this);
        this.getProducts(prods => this.setState({products: prods}))
    }
    getProducts(cb){ 
        return fetch( 'http://localhost:1234/products', {
        accept: "application/json"
        
      }).then(parseJSON).then(cb);
    }
  render() {
    const prods = this.state.products.map((prod, i) => (
        <li key={i}>{ prod.productName}</li>
    ));
    return (
      <div className="App">
        <ul>{prods}</ul>
      </div>
    );
  }
}