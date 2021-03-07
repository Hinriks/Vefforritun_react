import React from 'react';
import styles from './style.css';

class Delivered extends React.Component {
    render () {
        return (
            <div className='container delContainer' style={styles}>
                <h1>Delivery</h1>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Full Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <label htmlFor="inputTelephone">Telephone</label>
                            <input className="form-control" type="tel" id="inputTelephone" placeholder="1-(555)-555-5555" />
                        </div>
                    </div>
                    <div className="form-row cityAndZip">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <button type="button" onClick={ () => this.props.incStep() } className="btn btn-primary">Review Order</button>
                </form>
            </div>
        )
    }
};

export default Delivered;
