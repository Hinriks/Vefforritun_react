import React from 'react';
import styles from './style.css';

import Form from '../Form';

class Pickup extends React.Component {
    state = {
        name: "",
        phone: ""
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { name, phone } = this.state;
        return (
            <div className='container pickupContainer' style={styles}>
                <h1>Store Pick-up</h1>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Full Name</label>
                            <input type="text" name="name" value={name} onChange={this.handleChange.bind(this)} className="form-control" id="inputName" placeholder="Full Name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputTelephone">Telephone</label>
                            <input className="form-control" type="tel" name="phone" value={phone} onChange={this.handleChange.bind(this)} id="inputTelephone" placeholder="1-(555)-555-5555" />
                        </div>
                    </div>
                    <button type="button" onClick={() => { this.props.saveCustomer(name, phone); this.props.incStep() }} className="btn btn-primary">Review Order</button>
                </form>
            </div>
        )
    }
};

export default Pickup;
