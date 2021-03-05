import React from 'react';
import { getBubbleById } from '../../services/bubbleService'
import BubblePreview from '../BubblePreview';

// const bundleItems = ({ id }) => {


// }

const BundleList = async ({ item }) => {
    return (
        <div>
            <h1> {item.name}</h1>
            {item.items.map(id =>
                <BubblePreview key={id} item={getBubbleById(id)} />
            )}
        </div >
    )
};

export default BundleList;