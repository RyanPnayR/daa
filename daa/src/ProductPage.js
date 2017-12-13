import React, { Component } from 'react';
import { Product } from './Product';

function parseJSON(response) {
    return response.json();
  }

export class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {products:[]};
        this.getProducts = this.getProducts.bind(this);
        this.getProducts(prods => this.setState({products: prods}))
    }
    getProducts(cb){ 
        return fetch( 'http://localhost:1234/products', {
        accept: "application/json"
        
      }).then(parseJSON).then(cb).catch();
    }
  render() {
    const groupSize = 4;
    const prods = this.state.products.map(prod => (
        <div key={prod.products_id} className="col s12 m6 l3"><Product product={prod} /></div>
    )).reduce((r, element, index) => {
      // create element groups with size 3, result looks like:
      // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
      index % groupSize === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
  }, []).map((rowContent, i ) => {
    // surround every group with 'row'
    return <div key={i} className="row">{rowContent}</div>;
});;
    return (
      <div className="main-container container">
        {prods}
      </div>
    );
  }
}