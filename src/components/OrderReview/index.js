import React from 'react';
import styles from './style.css';
import { clearCart } from "../../services/cartService";

const OrderReview = (props) => {
    function getTotalPrice() {
        let items = props.items
        let price = 0
        Object.values(items).map(item => price = price + parseInt(item.price))
        return price
    }
    return (

        <div className="container orderReviewContainer" style={styles}>
            <h1>Order Review</h1>
            <div className="row">
                <br />
                    <div className="col-md-8">
                        {/*SHIPPING METHOD*/}
                        <div className="panel panel-default">
                            <div className="panel-heading text-center"><h4>Current Cart</h4></div>
                            <div className="panel-body">
                                <table className="table borderless">
                                    <thead>
                                    <tr>
                                        <td><strong>Your Cart: {Object.keys(props.items).length} items</strong></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { Object.values(props.items).map((item, index) =>
                                        <tr key={index}>
                                            <td className="col-md-3">
                                                <div className="media">
                                                    <a className="thumbnail pull-left" href="#"> <img className="media-object"
                                                                                                    src={item.image}
                                                                                                    style={{width: '72px', height: '72px'}} /> </a>
                                                    <div className="media-body">
                                                        <h5 className="media-heading">{ item.name }</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center"></td>
                                            <td className="text-right">{ item.price } kr.</td>
                                            {/* <td className="text-right">
                                                <button type="button" className="btn btn-danger">Remove</button>
                                            </td> */}
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*SHIPPING METHOD END*/}
                    </div>
                <div className="col-md-4">
                    {/*REVIEW ORDER */}
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">
                            <h4>Review Order</h4>
                        </div>
                        <div className="panel-body">
                            <div className="col-md-12">
                                <strong>Subtotal ({Object.keys(props.items).length} items)</strong>
                                <div className="pull-right"><span>{getTotalPrice()} kr.</span></div>
                            </div>
                            {/* <div className="col-md-12">
                                <strong>Tax</strong>
                                <div className="pull-right"><span>$</span><span>200.00</span></div>
                            </div> */}
                            <div className="col-md-12">
                                <strong>Delivery Method</strong>
                                <div className="pull-right"><span>{props.deliveryMethod}</span></div>
                                <hr />
                            </div>
                            <div className="col-md-12">
                                <strong>Order Total</strong>
                                <div className="pull-right"><span>{getTotalPrice()} kr.</span></div>
                                <hr />
                            </div>

                            <button type="button" onClick={() => { props.incStep(); props.saveOrder(); clearCart(); }} className="btn btn-primary btn-lg btn-block">Confirm Order</button>

                        </div>

                    </div>
                    {/*REVIEW ORDER END */}
                </div>
            </div>
        </div>
    )
};

export default OrderReview;
