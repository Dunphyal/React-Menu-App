import classes from './CartButton.module.css';
import React, { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon.js';

function CartButton(props){
    return <Fragment>
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>
                1
            </span>
        </button>
    </Fragment>
};

export default CartButton;