import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleAddressForm, deleteAddress, editAddress } from '../../actions/app-action';
import AddressForm from '../address-form';

import './style.scss';

const AddressListComponent = () => {
    const dispatch = useDispatch();
    const addressList = useSelector(state => state.app.addressList);
    const addressFormState = useSelector(state => state.app.addressFormState);

    const _toggleAddressForm = () => {
        dispatch(toggleAddressForm(!addressFormState));
    };

    const _editAddress = e => {
        const itemId = e.currentTarget.dataset.id;
        dispatch(editAddress(itemId));
    };

    const _deleteAddress = e => {
        const itemId = e.currentTarget.dataset.id;
        dispatch(deleteAddress(itemId));
    };

    const _renderAddressList = () => {
        if (!addressList || !addressList.length) {
            return (
                <div key={0} className='empty-address-list'>
                    <h3>Add an Address</h3>
                </div>
            );
        }
        return addressList.map((address, index) => (
            <div key={index} className='address-item'>
                <h3 className='address-heading'>{address.name}</h3>
                <div>{address.address}</div>
                <div>
                    Latitude: <code>{address.latitude}</code>
                </div>
                <div>
                    Longitude: <code>{address.longitude}</code>
                </div>
                <div>
                    <button className='outline edit-button' data-id={address.id} onClick={_editAddress}>
                        Edit
                    </button>
                    <button className='outline delete-button' data-id={address.id} onClick={_deleteAddress}>
                        Delete
                    </button>
                </div>
            </div>
        ));
    };

    return (
        <Fragment>
            <div className='address-list-container'>
                <section className='section'>
                    <button className='add-button' onClick={_toggleAddressForm}>
                        Add New
                    </button>
                    <div className='address-list'>{_renderAddressList()}</div>
                </section>
            </div>
            {addressFormState && <AddressForm toggleAddressForm={_toggleAddressForm} />}
        </Fragment>
    );
};

export default AddressListComponent;
