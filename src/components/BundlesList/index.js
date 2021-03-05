import React from 'react';

const BundleList = ({ item }) => (
    <div>
        <h1> {item.name}</h1>
        <h2> {item.items}</h2>
    </div >
);

export default BundleList;