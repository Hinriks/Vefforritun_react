import React from 'react';
import PropTypes from "prop-types";
import { getBubbleById } from '../../services/bubbleService'
import BubblePreviewHomePage from "../HomePage/BundlesHomePage/BubblePreviewHomePage";
import styles from "../HomePage/BundlesHomePage/BundlesListHomePage/style.css";
import Bundles from "../Bundles";

class BundlesList extends React.Component {
    state = {
        bubbles: [],
    };

    async componentDidMount() {
        let bubbleIds = this.props.item.items;
        for (const id of bubbleIds) {
            this.state.bubbles.push(await getBubbleById(id));
            //console.log(this.state.bubbles)
        }
    }

    render() {
        const { bubbles } = this.state;

        return (
            <div className='d-flex bundleContainer' style={styles}>
                {bubbles.map(bubble =>
                    <BubblePreviewHomePage key={bubble.id} item={bubble} />
                )}
            </div >
        )
    }
}

BundlesList.propTypes = {
    bubbles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired)
};

export default BundlesList;
