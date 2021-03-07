import React from 'react';
import { getBubbleById } from '../../services/bubbleService'
import BubblePreview from '../BubblePreview';

// const bundleItems = ({ id }) => {


// }

class BundleList extends React.Component {
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
            <div>
                {/* <h1> {bubble.name}</h1> */}
                {bubbles.map(bubble =>
                    <BubblePreview key={bubble.id} item={bubble} />
                )}
            </div >
        )
    }
}

export default BundleList;
