import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBundles } from '../../services/bubbleService';
import BundleList from '../BundlesList';
import styles from './styles.css'

const Bundles = () => {
    const [bundles, setBundles] = useState({});
    useEffect(() => {
        let isMounted = true;
        (async () => {
            if (isMounted) {
                setBundles(await getBundles());
            }
        })();
        return () => { isMounted = false };
    }, [bundles]);

    return (
        <div className='productsContainer' style={styles}>
            <h1>Bundles</h1>
            {Object.values(bundles).map(item =>
                <a href={`bundles/${item.id}`} key={item.id} className="text-decoration-none" style={{ margin: '40px' }}>
                    <div key={item.id}>
                        <h2 className='bundleName' style={styles}>{item.name}</h2>
                        <BundleList key={item.id} item={item} />
                    </div>
                </a>
            )
            }
        </div >
    )
};

Bundles.propTypes = {
    bundles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }))
};

export default Bundles;
