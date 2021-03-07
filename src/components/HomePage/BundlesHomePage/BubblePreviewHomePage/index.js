import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const BubblePreviewHomePage = ({ item }) => {
    return (
            <div className="bubble-preview" style={styles}>
                <img className="bubbleImg" src={item.image} alt={item.name}/>
                <div>
                    <h5 className="card-title py-4">{item.name}</h5>
                </div>
            </div>
    )
};

BubblePreviewHomePage.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
};

export default BubblePreviewHomePage;
