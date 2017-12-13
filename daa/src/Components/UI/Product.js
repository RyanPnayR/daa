import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';

export class Product extends Component {
    constructor(props){
        super(props);
        this.key = props.product.products_id;
        this.state = { showModal: false };
    }
    
    render() {
        const cardStyle = {
            display: 'block',
            width: '17vw',
            transitionDuration: '0.3s',
            height: '17vw'
        }
        return (
 
            <div className="card-panel" style={cardStyle} key={this.props.product.products_id}>
            <div className="center">
                <div> <img height="150" width="200" src={require("." + this.props.product.products_url)} alt="description"/> </div>
                <div className="center"> {this.props.product.products_price}</div>
                <Modal
	                header='Modal Header'
	                trigger={<Button>VIEW DETAILS</Button>}>
                    <div> <img width="200" src={require('.' + this.props.product.products_url)} alt="description"/> </div>
                    <div> {this.props.product.products_name}</div>
                    <div> {this.props.product.products_description}</div>                    
                    <div> {this.props.product.products_price}</div>
                    <Button onClick={this.props.onAddCart}> Add to cart </Button>
	            </Modal>
            </div>
            </div>

        );
    }
}