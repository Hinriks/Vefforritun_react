import React from 'react';
import styles from './style.css';

class DeliveryMethod extends React.Component {
    state = {
        checkoutStep: 0,
        deliveryOption: ""
    }
    render() {
        return (
            <div className='' style={styles}>
                <h3 className="text-center">Choose your delivery method</h3>
                <div className="row delivery-method-wrap">
                    <div className="col-md-6" onClick={() => { this.props.incStep(); this.props.setDeliveryMethod("Delivery") } }>
                        <div className="delivery-method-option card m-5 p-5 text-center shadow">
                            <div className="display-4">Delivery</div>
                            <span className="pt-1">We will delivery your order right to your doorstep.</span>
                        </div>
                    </div>
                    <div className="col-md-6" onClick={() => { this.props.incStep(); this.props.setDeliveryMethod("Pick up") } }>
                        <div className="delivery-method-option card m-5 p-5 text-center shadow">
                            <div className="display-4">Pick up</div>
                            <span className="pt-1">Order ahead and have it waiting for you at the store.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default DeliveryMethod;
