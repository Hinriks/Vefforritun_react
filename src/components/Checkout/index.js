import React from 'react';
import styles from './style.css';
import CheckoutSteps from '../CheckoutSteps';
import DeliveryMethod from '../DeliveryMethod';
import Delivered from '../Delivered';
import Pickup from '../Pickup';
import ReviewOrder from '../ReviewOrder';
import { getCart } from '../../services/cartService';

class Checkout extends React.Component {
    state = {
        checkoutStep: 1,
        deliveryOption: "",
        items: {},
    }
    
    async componentDidMount() {
        this.setState({ 
            checkoutStep: 1, 
            items: await getCart() 
        })
    }    

    setDeliveryMethod(method) {
        this.setState({ deliveryOption: method })
    }


    render() {
        let { checkoutStep, deliveryOption, items } = this.state;
        if (checkoutStep == 1) {
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={0} />
                    <DeliveryMethod incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) } setDeliveryMethod={ this.setDeliveryMethod.bind(this) } />
                </>
            )
        } else if (checkoutStep == 2) {
            let deliveryMethod;
            if (deliveryOption == "Delivery") {
                deliveryMethod = <Delivered incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) } />
            } else {
                deliveryMethod = <Pickup incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) } />
            }
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={1} />
                    {deliveryMethod}
                </>
            )
        } else if (checkoutStep == 3) {
            console.log(items)
            return (
                <>
                    <h1>Checkout</h1>
                    <CheckoutSteps step={2} />
                    <ReviewOrder deliveryMethod={deliveryOption} items={items} incStep={ () => this.setState({ checkoutStep: this.state.checkoutStep + 1 }) } />
                </>
            )
        } else if (checkoutStep == 4) {
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
};
export default Checkout;
