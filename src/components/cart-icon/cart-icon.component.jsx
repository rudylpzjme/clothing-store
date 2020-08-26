import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectTotalCartItems } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, totalItems }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ totalItems }</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    totalItems: selectTotalCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
