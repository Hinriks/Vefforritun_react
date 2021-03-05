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
            <h1>Bundles</h1>
            {Object.values(bundles).map(item =>
                <div className="col-md-4">
                    <BundleList key={item.id} item={item} />
                </div>
            )}
        </div>
    )
};

export default Bundles;