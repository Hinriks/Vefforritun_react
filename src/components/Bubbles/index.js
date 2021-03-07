import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBubbles } from '../../services/bubbleService';
import BubblePreview from '../BubblePreview';
import styles from './style.css';

const Bubbles = () => {
    const [ bubbles, setBubbles ] = useState({});
    useEffect(() => {
        let isMounted = true;
        (async () => {
            if (isMounted) {
                setBubbles(await getBubbles());
            }
        })();
        return () => { isMounted = false };
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

Bubbles.propTypes = {
    bubbles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};

export default Bubbles;
