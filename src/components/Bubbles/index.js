import React, { useEffect, useState } from 'react';
import { getBubbles } from '../../services/bubbleService';

const Bubbles = () => {
    const [ bubbles, setBubbles ] = useState({});
    useEffect(() => {
        (async () => {
            setBubbles(await getBubbles());
        })();
    }, []);
    return (
        <div>
            {Object.values(bubbles).map(item => 
                <div key={item.id}>{item.name}</div>
            )}
        </div>
    )
};

export default Bubbles;