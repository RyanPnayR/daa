import React, { Component } from 'react';
import { Product } from '../UI/Product';
import { fetchCart } from '../../Actions/cartActions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Cart extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert("check me out! ;)");
    }

    render() {
        const { count, products } = this.props;
        if ( count <= 0){
            return ( 
            <div onClick={this.handleClick.bind(this)}>
                <a><i className="material-icons">add_shopping_cart</i></a>
            </div>);
        }
        return (
        <div onClick={this.handleClick.bind(this)}>
            <a><i><span id="notifica" data-badge="1" className="icon material-icons mdl-badge">shop</span></i></a>
        </div>
        );
    }
}

Cart.propTypes = {
    fetchCart: PropTypes.func,
}
const mapStateToProps = state => {
    return {
        products : state.cart.products,
        count : state.cart.count
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchCart : dispatch(fetchCart()),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart) 
  