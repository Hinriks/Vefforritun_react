import React from 'react';
import styles from './style.css';

const ReviewOrder = (props) => {
    return (
        <div className='' style={styles}>
            <h1 className="text-center">Review your order</h1>
            <h3>Delivery Method</h3>
            <p>{ props.deliveryMethod }</p>
            <h3>Item summary</h3>
            <ul className="list-group w-50">
            { Object.values(props.items).map(item => 
                <li className="list-group-item cart-item" key={item.id}>
                    <img className="cart-item-image" src={item.image}/>
                    <span className="cart-item-name">{item.name}</span>
                    <span className="float-right pt-2">{item.price} kr.</span>
                </li>
            )}
            </ul>
            <div className="btn btn-primary" onClick={() => { props.incStep() }} >Place your order</div>
        </div>
    )
};

export default ReviewOrder;
