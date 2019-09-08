import { APP_CONSTANTS } from '../configs/constants';

const defaultAddressList = [
    {
        id: 'b92fCaC4h8O6P1Oy9ig1vaPMgIX',
        name: 'Leipzig',
        address: 'Leipzig',
        latitude: 51.3356955,
        longitude: 12.3730747
    },
    {
        id: 'YjiX3YYy9iPR64DiPgfjQW5VgBH',
        name: 'Checkpoint Charlie',
        address: 'Checkpoint Charlie',
        latitude: 52.5074434,
        longitude: 13.3903913
    }
];

const defaultState = {
    mapImage: '',
    addressList: defaultAddressList,
    currentAddress: {},
    addressFormState: false,
    loading: false,
    error: false
};

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case APP_CONSTANTS.ACTION_TYPE.LOADING: {
            return { ...state, error: false, loading: action.payload };
        }
        case APP_CONSTANTS.ACTION_TYPE.TOGGLE_ADDRESS_FORM: {
            return { ...state, addressFormState: action.payload, currentAddress: {} };
        }
        case APP_CONSTANTS.ACTION_TYPE.GET_GEO_CODE: {
            const { data = {}, error = null } = action.payload;
            if (error) {
                return { ...state, loading: false, error: APP_CONSTANTS.ERROR_MESSAGE };
            }
            const { id: addressId } = state.currentAddress;
            const tempAddressList = state.addressList.filter(item => item.id !== addressId);
            tempAddressList.push(data);
            return {
                ...state,
                loading: false,
                addressFormState: false,
                addressList: tempAddressList,
                currentAddress: data
            };
        }
        case APP_CONSTANTS.ACTION_TYPE.DELETE_ADDRESS: {
            const tempAddressList = state.addressList.filter(item => item.id !== action.payload);
            return { ...state, addressList: tempAddressList };
        }
        case APP_CONSTANTS.ACTION_TYPE.EDIT_ADDRESS: {
            const tempAddress = state.addressList.filter(item => item.id === action.payload)[0];
            return { ...state, currentAddress: tempAddress, addressFormState: true };
        }
        case APP_CONSTANTS.ACTION_TYPE.GET_MAP_IMAGE: {
            return { ...state, loading: false, mapImage: action.payload };
        }
        default:
            return state;
    }
};

export default appReducer;
