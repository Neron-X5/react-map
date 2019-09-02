import React, { Component, Fragment } from 'react';

import AddressForm from '../address-form';

import './style.scss';

class AddressListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { showForm: false };
    }

    toggleAddressForm = () => {
        this.setState(prevState => ({ showForm: !prevState.showForm }));
    };

    onFormSubmit = (latitude, longitude) => {
        console.log({ latitude, longitude });
        this.toggleAddressForm();
    };

    render() {
        return (
            <Fragment>
                <div className='address-list-container'>
                    <section className='section'>
                        <button className='add-button' onClick={this.toggleAddressForm}>
                            Add New
                        </button>
                        <div className='address-list'>
                            <div className='address-item'>
                                <h3 className='address-heading'>Leipzig</h3>
                                <span>Leipzig</span>
                                <span>
                                    Latitude: <code>51.3356955</code>
                                </span>
                                <span>
                                    Longitude: <code>12.3730747</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                            <div className='address-item'>
                                <h3 className='address-heading'>Checkpoint Charlie</h3>
                                <span>Checkpoint Charlie</span>
                                <span>
                                    Latitude: <code>52.5074434</code>
                                </span>
                                <span>
                                    Longitude: <code>13.3903913</code>
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
                {this.state.showForm && <AddressForm handleFormSubmit={this.onFormSubmit} />}
            </Fragment>
        );
    }
}

export default AddressListComponent;
