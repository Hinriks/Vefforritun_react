import React, { useEffect, useState } from 'react';
import { getBubbles } from '../../services/bubbleService';
import BubblePreview from '../BubblePreview';
import styles from './style.css';

const Bubbles = () => {
    const [ bubbles, setBubbles ] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles(await getBubbles());
        })();
    }, []);

    return (
        <div className='container bubblesContainer' style={styles}>
            <h1>Products</h1>
            <div className="row">
                {Object.values(bubbles).map(item =>
                    <div key={item.id} className="col-md-4">
                        <BubblePreview item={item}/>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Bubbles;
