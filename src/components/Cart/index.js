import React from 'react';
import { getCart, removeFromCart } from '../../services/cartService';
import styles from './styles.css'

class Cart extends React.Component { 
    state = {
        items: [],
    };

    componentDidMount() {
        this.setState({items: getCart()})
    }

    removeFromCart(itemId) {
        let new_items = this.state.items.filter(item => item.id != itemId)
        this.setState({items: new_items})
        removeFromCart(itemId)
    }

    render() {
        const { items } = this.state;
        return ( 
        <div style={styles} className="cart-wrap">
            <h1>Cart</h1>
            <ul className="list-group">
            {items.map((item, index) =>
                <li className="list-group-item cart-item" key={index}>
                    <img className="cart-item-image" src={item.image}/>
                    <span className="cart-item-name">{item.name}</span>
                    <span onClick={() => { this.removeFromCart(item.id) }} className="btn btn-danger float-right cart-item-remove">Remove</span>
                </li>
            )}
            </ul>
            <a href="/checkout" className="btn btn-primary">Checkout</a>
        </div>
        )
    }
}

export default Cart;