
import React from 'react';
import styles from './style.css';

const OrderReview = () => {
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
                                        <td><strong>Your Cart: # item</strong></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*foreach ($order->lineItems as $line) or some such thing here*/}
                                    <tr>
                                        <td className="col-md-3">
                                            <div className="media">
                                                <a className="thumbnail pull-left" href="#"> <img className="media-object"
                                                                                                  src="http://lorempixel.com/460/250/"
                                                                                                  style={{width: '72px', height: '72px'}} /> </a>
                                                <div className="media-body">
                                                    <h5 className="media-heading"> Product Name</h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">$10.99</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right">$32.99</td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-md-3">
                                            <div className="media">
                                                <a className="thumbnail pull-left" href="#"> <img className="media-object"
                                                                                                  src="http://lorempixel.com/460/250/"
                                                                                                  style={{width: '72px', height: '72px'}} /> </a>
                                                <div className="media-body">
                                                    <h5 className="media-heading"> Product Name</h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">$10.99</td>
                                        <td className="text-center">1</td>
                                        <td className="text-right"> $32.99</td>
                                        <td className="text-right">
                                            <button type="button" className="btn btn-danger">Remove</button>
                                        </td>
                                    </tr>
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
                                <strong>Subtotal (# item)</strong>
                                <div className="pull-right"><span>$</span><span>200.00</span></div>
                            </div>
                            <div className="col-md-12">
                                <strong>Tax</strong>
                                <div className="pull-right"><span>$</span><span>200.00</span></div>
                            </div>
                            <div className="col-md-12">
                                <small>Shipping</small>
                                <div className="pull-right"><span>-</span></div>
                                <hr />
                            </div>
                            <div className="col-md-12">
                                <strong>Order Total</strong>
                                <div className="pull-right"><span>$</span><span>150.00</span></div>
                                <hr />
                            </div>

                            <button type="button" className="btn btn-primary btn-lg btn-block">Confirm Order</button>

                        </div>

                    </div>
                    {/*REVIEW ORDER END */}
                </div>
            </div>
        </div>
    )
};

export default OrderReview;
