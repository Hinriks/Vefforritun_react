import React from 'react';
import styles from './style.css';

const BubblePreview = ({ item }) => {
    return (
        <div className="card mb-4 box-shadow" style={styles}>
            <img className="card-img-top" src={item.image} alt={item.name}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
            </div>
            <a href="/" className="btn btn-primary">Buy now!</a>
        </div>
    )
};

export default BubblePreview;
