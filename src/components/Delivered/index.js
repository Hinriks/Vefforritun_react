import React from 'react';
import styles from './style.css';
import validator from 'validator';
import toastr from 'toastr';
import Input from '../Input';
import Form from '../Form';

class Delivered extends React.Component {
    state = {
        fields: {
            name: "",
            address: "",
            phone: "",
            city: "",
            zip: ""
        },
        errors: {
            nameError: "",
            addressError: "",
            phoneError: "",
            cityError: "",
            zipError: "",
        },
    }

    onInput(event) {
        this.setState({
            fields: {
                ...this.state.fields,
                [event.target.name]: event.target.value,
            }
        });
    }

    validateForm() {
        const { name, address, phone, city, zip } = this.state.fields;
        const errors = {};

        if (name === '') { errors.nameError = 'Full name is required.'; }
        if (address === '') { errors.addressError = 'Address is required.'; }
        if (phone === '') { errors.phoneError = 'Phone is required.'; }
        if (city === '') { errors.cityError = 'City is required.'; }
        if (zip === '') { errors.zipError = 'Zip is required.'; }

        if (!validator.isMobilePhone(phone)) { errors.phoneError = 'Phone number is not properly formatted.'; }
        if (Object.keys(errors).length > 0) {
            this.setState({ ...this.state.errors, errors });
            return false;
        }
        return true;
    }

    submitForm() {
        if (!this.validateForm()) {
            toastr.error('the Form was not succesfully submited', 'failed');
            return false
        } else {
            toastr.success('the form was succesfully submitted', 'Success');
            return true
        }
    }

    checkForm(event) {
        const { name, address, phone, city, zip } = this.state.fields;
        event.preventDefault();

        if (this.submitForm()) {
            this.props.saveCustomer(name, phone, address, city, zip);
            this.props.incStep();
        }
    }

    render() {
        const { name, address, phone, city, zip } = this.state.fields;
        const { nameError, addressError, phoneError, cityError, zipError } = this.state.errors;

        return (

            <div className='container delContainer' style={styles}>
                <h1>Delivery</h1>
                <Form onSubmit={event => this.checkForm(event)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Full Name</label>
                            <Input type="text"
                                name="name"
                                value={name}
                                errorMessage={nameError}
                                onInput={event => this.onInput(event)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Address</label>
                            <Input type="text"
                                name="address"
                                value={address}
                                errorMessage={addressError}
                                onInput={event => this.onInput(event)} />

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <label htmlFor="inputTelephone">Telephone</label>
                            <Input className="form-control"
                                name="phone"
                                value={phone}
                                errorMessage={phoneError}
                                onInput={event => this.onInput(event)} />
                        </div>
                    </div>
                    <div className="form-row cityAndZip">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <Input type="text"
                                className="form-control"
                                name="city" value={city}
                                errorMessage={cityError}
                                onInput={event => this.onInput(event)} />

                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <Input type="text" className="form-control"
                                name="zip" value={zip}
                                errorMessage={zipError}
                                onInput={event => this.onInput(event)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit"
                            className="btn btn-primary"
                            style={{ marginTop: '10' }} >Review order</button>
                    </div>



                </Form>
            </div>
        )
    }
};

export default Delivered;
