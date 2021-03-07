import React from 'react';
import styles from './style.css';
import Form from '../Form';
import Input from '../Input'

import validator from 'validator';
import toastr from 'toastr';

class Pickup extends React.Component {
    state = {
        fields: {
            name: "",
            phone: ""
        },
        errors: {
            nameError: "",
            phoneError: "",
        },
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
        const { name, phone } = this.state.fields;
        const errors = {};

        if (name === '') { errors.nameError = 'name is required.'; }
        if (phone === '') { errors.phoneError = 'Phone is required.'; }
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
            console.log(this.state.fields);
            toastr.success('the form was succesfully submitted', 'Success');
            return true
        }
    }

    checkForm(event) {
        const { name, phone } = this.state.fields;
        event.preventDefault();

        if (this.submitForm()) {
            console.log(this.props)
            this.props.saveCustomer(name, phone);
            this.props.incStep();
        }
    }

    /*  <button type="button" onClick={() => { this.props.saveCustomer(name, phone); this.props.incStep() }} className="btn btn-primary">Review Order</button> */

    render() {
        const { name, phone } = this.state.fields;
        const { nameError, phoneError, } = this.state.errors;

        return (
            <>
                <div className='container pickupContainer' style={styles}>
                    <h1>Store Pick-up</h1>
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
                            <div className="col-md-6">
                                <label htmlFor="inputTelephone">Telephone</label>
                                <Input className="form-control"
                                    name="phone"
                                    value={phone}
                                    errorMessage={phoneError}
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
            </>
        )
    }
};

export default Pickup;
