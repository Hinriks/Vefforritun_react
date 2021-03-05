import React, { useEffect, useState } from 'react';
import { getBundles } from '../../services/bubbleService';
import BundleList from '../BundlesList';


const Bundles = () => {
    const [bundles, setBundles] = useState({});
    useEffect(() => {
        (async () => {
            setBundles(await getBundles());
        })();
    }, []);
    console.log(bundles)
    return (
        <div>
            
            {Object.values(bundles).map(item =>
                <div className="col-md-4" key={item.id}>
                    <h1>{item.name}</h1>
                    <BundleList key={item.id} item={item} />
                </div>
            )}
        </div>
    )
};

export default Bundles;