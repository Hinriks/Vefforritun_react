import React from 'react';
import { getBubbleById } from '../../services/bubbleService';
import { getBundleById } from '../../services/bubbleService'
import { addToCart } from '../../services/cartService';
import styles from './style.css';

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
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
                <div className="btn btn-primary mt-2" onClick={ () => this.addBundleToCart() }>Add to cart</div>
            </div>
        )
    }
};


export default BundlesDetails;
