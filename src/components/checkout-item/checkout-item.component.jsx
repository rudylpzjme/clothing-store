import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearCartItem }) => {
    const { imageUrl, name, quantity, price } = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt='checkout item' />
            </div>
            <span className='name'>{ name }</span> 
            <span className='quantity'>
                <span className="arrow" onClick={ () => removeItem(item) }>&#10094;</span>
                <span className="value">{ quantity }</span>
                <span className="arrow" onClick={ () => addItem(item) }>&#10095;</span>
            </span> 
            <span className='price'>{ price }</span> 
            <span className='remove-button' onClick={ () => clearCartItem(item) }>&#10005;</span> 
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearCartItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
