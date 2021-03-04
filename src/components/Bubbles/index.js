import React, { useEffect, useState } from 'react';
import { getBubbles } from '../../services/bubbleService';
import BubblePreview from '../BubblePreview';

const Bubbles = () => {
    const [ bubbles, setBubbles ] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles(await getBubbles());
        })();
    }, []);
    console.log(bubbles)
    return (
        <div className="row">
            {Object.values(bubbles).map(item => 
                <div className="col-md-4">
                    <BubblePreview key={item.id} item={item}/>
                </div>
            )}
        </div>
    )
};

export default Bubbles;