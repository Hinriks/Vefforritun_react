import React from 'react';
import PropTypes from "prop-types";
import CheckoutSteps from '../CheckoutSteps';
import DeliveryMethod from '../DeliveryMethod';
import Delivered from '../Delivered';
import Pickup from '../Pickup';
import OrderReview from '../OrderReview';
import { getCart } from '../../services/cartService';
import { storeOrder } from '../../services/orderService';

class Checkout extends React.Component {
    state = {
        checkoutStep: 1,
        deliveryOption: "",
        items: {},
        customer: {}
    };

    async componentDidMount() {
        this.setState({
            checkoutStep: 1,
            items: await getCart()
        });
    }

    setDeliveryMethod(method) {
        this.setState({ deliveryOption: method });
    }

    saveCustomer(name, phone, address="", city="", zip="") {
        let customer = {}
        customer['name'] = name
        customer['phone'] = phone
        customer['address'] = address
        customer['city'] = city
        customer['zip'] = zip
        this.setState({
            customer: customer
        })
        localStorage.setItem('customer', JSON.stringify(customer))
    }

    saveOrder() {
        const { deliveryOption, items, customer } = this.state;
        let orderObj = {};
        orderObj['delivery'] = deliveryOption;
        orderObj['items'] = items;
        let today = new Date();
        orderObj['date'] = today.getDate() + "/" + (today.getMonth()+1) + "/" +  today.getFullYear();
        orderObj['customer'] = customer;
        storeOrder(orderObj, customer.phone);
    }



    render() {
        let { checkoutStep, deliveryOption, items } = this.state;
        if (checkoutStep === 1) {
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={0} />
                    <DeliveryMethod incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) } setDeliveryMethod={ this.setDeliveryMethod.bind(this) } />
                </>
            )
        } else if (checkoutStep === 2) {
            let deliveryMethod;
            if (deliveryOption === "Delivery") {
                deliveryMethod = <Delivered
                                    incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) }
                                    saveCustomer={ this.saveCustomer.bind(this) }
                                    />
            } else {
                deliveryMethod = <Pickup
                                    incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) }
                                    saveCustomer={ this.saveCustomer.bind(this) }
                                    />
            }
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={1} />
                    {deliveryMethod}
                </>
            )
        } else if (checkoutStep === 3) {
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={2} />
                    <OrderReview
                        deliveryMethod={deliveryOption}
                        items={items}
                        incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) }
                        saveOrder={ () => this.saveOrder() }
                        />
                </>
            )
        } else if (checkoutStep === 4) {
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={3} />
                    <h1>Finito!</h1>
                    <p>Your order has been placed</p>
                </>
            )
        }
    }
}

Checkout.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })),
    customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
    })
};

export default Checkout;
