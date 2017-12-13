import React, { Component } from 'react';
import { Product } from '../UI/Product';
import { fetchProducts } from '../../Actions/productActions'
import { connect } from "react-redux"
import PropTypes from 'prop-types';

class ProductPage extends Component {
    componentWillMount() {

      }
    
      render() {
          
        const products = this.props.products.products;
        const {fetchAllProducts} = this.props;
        console.log( products);
        if (!products.length) {
          return <button onClick={fetchAllProducts}>load tweets</button>
        }
    
        const groupSize = 4;
        const prods = products.map(prod => (
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
    });
        return (
          <div className="main-container container">
            {prods}
          </div>
        );
      }
}

ProductPage.propTypes = {
    fetchAllProducts: PropTypes.func,
}
const mapStateToProps = state => {
    return {
        products : state.products
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts : dispatch(fetchProducts()),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductPage) 
  