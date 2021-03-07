import React from 'react';
import { getBubbleById } from '../../services/bubbleService';
import { getBundleById } from '../../services/bubbleService'
import { addToCart } from '../../services/cartService';
import styles from './style.css';
import PropTypes from "prop-types";
import Bundles from "../Bundles";

class BundlesDetails extends React.Component {
    state = {
        bundle: {},
        bubbles: [],
    };

    async componentDidMount() {
        this.setState({ bundle: await getBundleById(this.props.match.params.id) });
        let bubbleIds = this.state.bundle.items;
        for (const ids of bubbleIds) {
            this.state.bubbles.push(await getBubbleById(ids));
        }
        // Need to set state to force update the site
        this.setState({
            bubbles: this.state.bubbles,
        })
    }

    addBundleToCart() {
        this.state.bubbles.forEach(item => {
            addToCart(item)
        });
    }

    totalPrice() {
        let price = 0;
        for (const obj of this.state.bubbles) {
            price += obj.price;
        }
        return price;
    }

    render() {

        const { bubbles, bundle } = this.state;
        return (
            <div className="" style={styles}>
                <h2> {bundle.name} </h2>
                <div>
                    <div>This bundle includes:</div>
                    <div className="row">
                        {bubbles.map((item, index) =>
                            <div key={index} className="card m-2 bundle-card">
                                <img className="cart-img-top bundle-item-img" src={item.image} alt={item.name}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <strong>{item.price} kr.</strong>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
                <div>
                    <h5>Price: <strong>{this.totalPrice()} kr.</strong></h5>
                </div>
                <div className="btn btn-primary mt-2" onClick={ () => { this.addBundleToCart(); window.location.reload(); } }>Add to cart</div>
            </div>
        )
    }
}

Bundles.propTypes = {
    bundle: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    bubbles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};


export default BundlesDetails;
