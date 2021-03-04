import React, { useEffect } from 'react';
import { getBubbles } from '../../services/bubbleService';

const Bubbles = () => {
    useEffect(() => {
        (async () => {
            console.log(await getBubbles());
        })();
    }, []);
    return (
        <div>Bubbles</div>
    )
};

export default Bubbles;