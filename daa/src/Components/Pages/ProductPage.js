import React, { Component } from 'react';
import { Product } from '../UI/Product';
import { fetchProducts } from '../../Actions/productActions';
import { addToCart } from '../../Actions/cartActions';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal, Button } from 'react-materialize';

class ProductPage extends Component {
      componentWillMount(){
        this.props.fetchProducts();
      }

      render() {
          
        const products = this.props.products.products;

        if (!products.length) {
          return (<div/>);
        }

        const prods = products.map( (prod) => (
            <div key={prod.products_id} className="col s12 m6 l3">
              <Product product={prod} >
                <Modal
                header='Modal Header'
                trigger={<Button>VIEW DETAILS</Button>}>
                  {/* /<div> <img width="200" src={require(`../UI/${prod.products_url}`)} alt="description"/> </div> */}
                  <div> {prod.products_name}</div>
                  <div> {prod.products_description}</div>                    
                  <div> {prod.products_price}</div>
                  <Button onClick={this.props.addItemToCart}> Add to cart </Button>
                </Modal>
              </Product>
            </div>
        )).reduce((r, element, index) => {
          // create element groups with size groupSize, result looks like:
          // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
          index % this.props.groupSize === 0 && r.push([]);
          r[r.length - 1].push(element);
          return r;
      }, []).map((rowContent, i ) => {
        // surround every group with 'row'
        return <div key={i} className="row">{rowContent} </div>;
    });
        return (
          <div className="main-container container">
            {prods}
          </div>
        );
      }
}

function mapStateToProps(state) {
    return {
        groupSize: state.products.groupSize,
        products : state.products,
        cart : state.cart
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProducts: fetchProducts,
        addItemToCart: addToCart
  }, dispatch);
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductPage) 
  