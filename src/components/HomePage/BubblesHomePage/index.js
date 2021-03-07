import React, { useEffect, useState } from 'react';
import {getBubbles} from '../../../services/bubbleService';
import BubblePreview from "../../BubblePreview";
import styles from '../style.css'

const BubblesHomePage = () => {
    const [ bubbles, setBubbles ] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles(await getBubbles());
        })();
    }, []);

    return (
            <div className='productsContainer' style={styles}>
                <h3>Bubbles</h3>
                <div className="row">
                {Object.values(bubbles).slice(0, 3).map(item =>
                    <div key={item.id} className="col-md-4">
                        <BubblePreview item={item}/>
                    </div>
                )}
                <h4>Click <a href='/bubbles'>here</a> to see all bubbles.</h4>
                </div>
            </div>
    )
};

export default BubblesHomePage;
