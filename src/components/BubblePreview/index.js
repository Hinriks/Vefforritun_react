import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const BubblePreview = ({ item }) => {
    return (
        <div className="card mb-4 box-shadow bubble-preview" style={styles}>
            <a href={"/bubbles/" + item.id} className='image'>
                <img className="card-img-top" src={item.image} alt={item.name}/>
            </a>
            <div className="card-body">
                <a href={"/bubbles/" + item.id}>
                    <h5 className="card-title">{item.name}</h5>
                </a>
                <strong>{item.price} kr.</strong>
                <p className="card-text">{item.description}</p>
                {/*<a href={"/bubbles/" + item.id } className="btn btn-primary float-right">Buy now!</a>*/}
            </div>
        </div>
    )
};

BubblePreview.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
};

export default BubblePreview;
