import React from 'react';
import PropTypes from "prop-types";
import { addToCart, clearCart } from '../../services/cartService';
import { getOrder } from '../../services/orderService';
import styles from './styles.css'

class PreviousOrders extends React.Component {
    state = {
        phone: "",
        order: {items:[]}
    };

    async componentDidMount() {
        if (localStorage.getItem('customer')) {
            let customer = JSON.parse(localStorage.getItem('customer'));
            this.setState({
                phone: customer.phone,
                order: (await getOrder(customer.phone))[0]
            })
        }
    }

    async findOrder() {
        let order = (await getOrder(this.state.phone))[0]
        if (order) {
            this.setState({
                order: order
            })
        } else {
            this.setState({
                order: {items:[]}
            })
        }
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    addOrderToCart() {
        if (this.state.order) {
            clearCart()
            this.state.order.items.forEach(item => {
                addToCart(item)
                window.location.href = "/checkout"
            })
        }
    }

    render() {
        const { phone, order } = this.state;
        return (
        <div style={styles} className="pt-5">
            <h2>Your orders</h2>
            <p>Search for previous orders</p>
            <div className="row input-group pb-4 pl-3">
                <input type="tel" placeholder="Your telephone" value={phone} onChange={this.handlePhoneChange.bind(this)}/>
                <div className="input-group-append">
                    <div className="btn btn-primary" onClick={() => this.findOrder()}>Search</div>
                </div>
            </div>
            {order && order.items.length > 0 ?
                <div className="card">
                    <div className="card-body">
                        <div className="card-title text-center">Ordered on { order.date }</div>
                        {order.items.map((item, index) =>
                            <li className="list-group-item cart-item" key={index}>
                                <img className="cart-item-image" src={item.image} alt={item.name} />
                                <span className="cart-item-name">{item.name}</span>
                                <span className="float-right pt-2">{item.price} kr.</span>
                            </li>
                            )}
                        <div className="text-center pt-3">
                            <div className="btn btn-primary text-center" onClick={ () => this.addOrderToCart() }>Order again</div>
                        </div>
                    </div>

                </div>
                :
                <div>
                    <h4>This phone number has no previous orders.</h4>
                </div>
            }
        </div>
        )
    }
}

PreviousOrders.propTypes = {
    order: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};

export default PreviousOrders;
