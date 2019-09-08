import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getGeoCode } from '../../actions/app-action';

import './style.scss';

const AddressFormComponent = ({ toggleAddressForm }) => {
    const currentAddress = useSelector(state => state.app.currentAddress);
    const loading = useSelector(state => state.app.loading);
    const error = useSelector(state => state.app.loading);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (currentAddress.name && currentAddress.address) {
            setName(currentAddress.name);
            setAddress(currentAddress.address);
        }
    }, [currentAddress]);

    const _handleName = e => {
        setName(e.target.value);
    };

    const _handleAddress = e => {
        setAddress(e.target.value);
    };

    const _handleSubmit = event => {
        event.preventDefault();
        getGeoCode(name, address);
    };

    return (
        <div className='address-form-container'>
            <div className='overlay' onClick={toggleAddressForm}></div>
            <div className='form-container'>
                <h2 className='form-title'>Add Address Details</h2>
                <form className='form' onSubmit={_handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name' className='form-label'>
                            Name
                        </label>
                        <input
                            id='name'
                            className='form-input'
                            type='text'
                            autoComplete='on'
                            maxLength={50}
                            required={true}
                            value={name}
                            onChange={_handleName}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='address' className='form-label'>
                            Address
                        </label>
                        <input
                            id='address'
                            className='form-input'
                            type='text'
                            autoComplete='on'
                            maxLength={250}
                            required={true}
                            value={address}
                            onChange={_handleAddress}
                        />
                    </div>
                    <div className='form-button'>
                        <button type='submit' disabled={loading}>
                            Submit
                        </button>
                        <button className='outline' onClick={toggleAddressForm} disabled={loading}>
                            Cancel
                        </button>
                    </div>
                    {error && <div className='form-error'>{error}</div>}
                </form>
            </div>
        </div>
    );
};

AddressFormComponent.propTypes = {
    toggleAddressForm: PropTypes.func.isRequired
};

export default AddressFormComponent;
