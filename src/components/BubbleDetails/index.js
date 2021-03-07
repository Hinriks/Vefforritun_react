import React from 'react';
import { getBubbleById } from '../../services/bubbleService';
import { addToCart } from '../../services/cartService';
import styles from './style.css';

class BubbleDetails extends React.Component {
    state = {
        bubble: {},
    };

    async componentDidMount() {
        this.setState({ bubble: await getBubbleById(this.props.match.params.id) })
    }

    render() {
        const { name, description, price, image } = this.state.bubble
        return (
            <div className="row" style={styles}>
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src={ image } className="p-5 details-image" alt={name}/>
                </div>
                <div className="col-md-6 pt-5">
                    <h3>{ name }</h3>
                    <p>
                        <strong>{ price } kr.</strong>
                    </p>
                    <p className="pt-1 details-description">{ description }</p>
                    <div onClick={ () => { addToCart(this.state.bubble); window.location.reload(); } } className="btn btn-primary float-left">Add to cart</div>
                </div>
            </div>
        )
    }
};

export default BubbleDetails;
