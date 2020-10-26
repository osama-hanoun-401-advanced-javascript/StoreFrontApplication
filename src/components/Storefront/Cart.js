import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../../store/actions';
import Button from '@material-ui/core/Button';


const Cart = props => {
    let items = props.items;
    console.log(props, items.length !== 0)

    return (

        <>
            <h3>Cart {props.counter}</h3>
            <ul>

                {items.length ? items.map((name, indx) => {
                    return (
                        <li
                            key={indx}
                        >
                            <span>{name}</span>
                            <Button onClick={() => props.removeFromCart(name)} variant="contained"  > X </Button>
                        </li>

                    );
                }) : null}
            </ul>

        </>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.cart.counter,
        items: state.cart.cartItems,
    };
};

const mapDispatchToProps = { removeFromCart: remove };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
