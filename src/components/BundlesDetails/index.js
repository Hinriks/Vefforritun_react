import React from 'react';
import { getBubbleById } from '../../services/bubbleService';
import { getBundleById } from '../../services/bubbleService'
import { addToCart } from '../../services/cartService';
import styles from './style.css';

class BundlesDetails extends React.Component {
    state = {
        bundles: {},
        bubbles: [],
    };

    async componentDidMount() {
        this.setState({ bundles: await getBundleById(this.props.match.params.id) });
        let bubbleIds = this.state.bundles.items;
        for (const ids of bubbleIds) {
            this.state.bubbles.push(await getBubbleById(ids));
        }
        this.setState({
            bubbles: this.state.bubbles,
        })
    }

    render() {

        const { bubbles, bundles } = this.state;
        return (
            <div className="row" style={styles}>
                <h2> {bundles.name} Review </h2>

            </div>
        )
    }
};


export default BundlesDetails;
