import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class AddressFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { latitude: '', longitude: '' };
    }

    handleInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.latitude, this.state.longitude);
    };

    render() {
        return (
            <div className='address-form-container'>
                <div className='overlay'></div>
                <div className='form-container'>
                    <h2 className='form-title'>Add Address Details</h2>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='latitude' className='form-label'>
                                Latitude
                            </label>
                            <input
                                id='latitude'
                                className='form-input'
                                type='number'
                                step={0.0000001}
                                autoComplete='off'
                                maxLength={10}
                                required={true}
                                value={this.state.latitude}
                                onChange={this.handleInputChange.bind(this, 'latitude')}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='longitude' className='form-label'>
                                Longitude
                            </label>
                            <input
                                id='longitude'
                                className='form-input'
                                type='number'
                                step={0.0000001}
                                autoComplete='off'
                                maxLength={10}
                                required={true}
                                value={this.state.longitude}
                                onChange={this.handleInputChange.bind(this, 'longitude')}
                            />
                        </div>
                        <div className='form-button'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

AddressFormComponent.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired
};

export default AddressFormComponent;
