import service from '../configs/service-call';
import store from '../reducers/store';
import { APP_CONSTANTS } from '../configs/constants';

const uuidv4 = require('uuid/v4');

export const toggleLoader = (bool = false) => ({
    type: APP_CONSTANTS.ACTION_TYPE.LOADING,
    payload: bool
});

export const toggleAddressForm = (bool = false) => ({
    type: APP_CONSTANTS.ACTION_TYPE.TOGGLE_ADDRESS_FORM,
    payload: bool
});

export const getBingGeoCode = (name = '', address = '') => ({
    type: APP_CONSTANTS.ACTION_TYPE.GET_GEO_CODE,
    payload: service({
        url: APP_CONSTANTS.API.BING_GET_LOCATION.replace(/\{address\}/gi, encodeURI(address)).replace(
            /\{api_key\}/gi,
            APP_CONSTANTS.BING_API_KEY
        )
    })
        .then(data => {
            if (
                !data.resourceSets ||
                !data.resourceSets.length ||
                !data.resourceSets[0].estimatedTotal === 0 ||
                !data.resourceSets[0].resources ||
                !data.resourceSets[0].resources.length
            ) {
                return { error: APP_CONSTANTS.ERROR_MESSAGE };
            }
            /* if (data.resourceSets[0].estimatedTotal > 1) {
                return { ...state, loading: false, addressOptions: data.resourceSets[0].resources };
            } */
            const responseAddress = data.resourceSets[0].resources[0];
            const id = uuidv4();
            const address = responseAddress.address.formattedAddress;
            const [latitude, longitude] = responseAddress.geocodePoints[0].coordinates;
            return { data: { id, name, address, latitude, longitude } };
        })
        .catch(error => ({ error }))
});

export const getGoogleGeoCode = (name = '', address = '') => ({
    type: APP_CONSTANTS.ACTION_TYPE.GET_GEO_CODE,
    payload: service({
        url: APP_CONSTANTS.API.GOOGLE_GET_LOCATION.replace(/\{address\}/gi, encodeURI(address)).replace(
            /\{api_key\}/gi,
            APP_CONSTANTS.GOOGLE_API_KEY
        )
    })
        .then(data => {
            if (data.status !== 'OK') {
                return { error: APP_CONSTANTS.ERROR_MESSAGE };
            }
            const id = data.results[0].place_id;
            const address = data.results[0].formatted_address;
            const { lat: latitude, lng: longitude } = data.results[0].geometry.location;
            return { data: { id, name, address, latitude, longitude } };
        })
        .catch(error => ({ error }))
});

export const getGeoCode = (name = '', address = '') => {
    store.dispatch(toggleLoader(true));
    if (APP_CONSTANTS.PROVIDER === 'BING') {
        store.dispatch(getBingGeoCode(name, address));
    } else if (APP_CONSTANTS.PROVIDER === 'GOOGLE') {
        store.dispatch(getGoogleGeoCode(name, address));
    }
};

export const deleteAddress = (addressId = '') => ({
    type: APP_CONSTANTS.ACTION_TYPE.DELETE_ADDRESS,
    payload: addressId
});

export const editAddress = (addressId = '') => ({
    type: APP_CONSTANTS.ACTION_TYPE.EDIT_ADDRESS,
    payload: addressId
});

export const getBingMapImage = (addressList = []) => {
    let pushPins = '';
    addressList.forEach((address, index) => {
        pushPins += APP_CONSTANTS.API.BING_MARKERS.replace(/\{latitude\}/gi, address.latitude)
            .replace(/\{longitude\}/gi, address.longitude)
            .replace(/\{name\}/gi, `P${index + 1}`);
        // .replace(/\{name\}/gi, address.name);
    });
    return {
        type: APP_CONSTANTS.ACTION_TYPE.GET_MAP_IMAGE,
        payload: `${
            APP_CONSTANTS.API[`${APP_CONSTANTS.PROVIDER}_BASE_URL`]
        }${APP_CONSTANTS.API.BING_GET_MAP_IMAGE.replace(/\{api_key\}/gi, APP_CONSTANTS.BING_API_KEY)}${pushPins}`
    };
};

export const getGoogleMapImage = (addressList = []) => ({
    type: APP_CONSTANTS.ACTION_TYPE.GET_MAP_IMAGE,
    payload: null
});

export const getMapImage = (addressList = []) => {
    store.dispatch(toggleLoader(true));
    // const { addressList = [] } = store.getState();
    if (APP_CONSTANTS.PROVIDER === 'BING') {
        store.dispatch(getBingMapImage(addressList));
    } else if (APP_CONSTANTS.PROVIDER === 'GOOGLE') {
        store.dispatch(getGoogleMapImage(addressList));
    }
};
