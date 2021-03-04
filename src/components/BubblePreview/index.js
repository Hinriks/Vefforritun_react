import React from 'react';

const BubblePreview = ({ item }) => {
    return (
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={item.image} alt={item.name}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <a href="/" className="btn btn-primary float-right">Buy now!</a>
            </div>
        </div>
    )
};

export default BubblePreview;