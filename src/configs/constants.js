export const APP_CONSTANTS = {
    PROVIDER: 'BING', // set from: ['GOOGLE', 'BING']
    ERROR_MESSAGE: 'Could not fetch the data. Please try again in a moment.',
    BING_API_KEY: 'Ah0dP42fWseRql_Fw2VhiGd7yxlWClb2mwW2-ctdcbTM1gqBcKoPAAxuIxEqUzpM',
    GOOGLE_API_KEY: 'AIzaSyC-vUQ5wO-JW7QZ8gJC-C2VCt5KZEfRvWQ',
    ACTION_TYPE: {
        LOADING: 'LOADING',
        TOGGLE_ADDRESS_FORM: 'TOGGLE_ADDRESS_FORM',
        DELETE_ADDRESS: 'DELETE_ADDRESS',
        EDIT_ADDRESS: 'EDIT_ADDRESS',
        GET_GEO_CODE: 'GET_GEO_CODE',
        GET_MAP_IMAGE: 'GET_MAP_IMAGE'
    },
    API: {
        BING_BASE_URL: 'http://dev.virtualearth.net/REST/v1',
        GOOGLE_BASE_URL: 'https://maps.googleapis.com/maps/api',
        BING_GET_LOCATION: '/Locations?q={address}&key={api_key}&o=json',
        GOOGLE_GET_LOCATION: '/geocode/json?address={address}&key={api_key}',
        BING_GET_MAP_IMAGE:
            '/Imagery/Map/Road/51.136874777102875,9.73400664062499/7?key={api_key}&mapSize=3000,1500&declutter=1&dpi=Large&format=gif',
        GOOGLE_GET_MAP_IMAGE: '',
        BING_MARKERS: '&pushpin={latitude},{longitude};1;{name}',
        GOOGLE_MARKERS: ''
    }
};
