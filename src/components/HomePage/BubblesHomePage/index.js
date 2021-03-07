import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import {getBubbles} from '../../../services/bubbleService';
import BubblePreview from "../../BubblePreview";
import styles from '../style.css'

const BubblesHomePage = () => {
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
            <div className='bubblesHomePageContainer' style={styles}>
                <h2>Bubbles</h2>
                <div className="row">
                {Object.values(bubbles).slice(0, 3).map(item =>
                    <div key={item.id} className="col-md-4">
                        <BubblePreview item={item}/>
                    </div>
                )}

                </div>
               <a href='/bubbles'><h4>Click here to see all bubbles.</h4></a>
            </div>
    )
};

BubblesHomePage.propTypes = {
    bubbles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};

export default BubblesHomePage;
