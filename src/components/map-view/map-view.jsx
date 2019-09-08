import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBingMapImage } from '../../actions/app-action';

import './style.scss';

const MapViewComponent = () => {
    const dispatch = useDispatch();
    const addressList = useSelector(state => state.app.addressList);
    const mapImage = useSelector(state => state.app.mapImage);

    useEffect(() => {
        dispatch(getBingMapImage(addressList));
    }, [addressList, dispatch]);

    return (
        <div className='map-view-container'>
            <section className='section'>
                <img
                    /* src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Germany_River_Werre_Map.svg/1677px-Germany_River_Werre_Map.svg.png' */
                    src={mapImage}
                    align='middle'
                    alt='map-view'
                    className='map'
                />
            </section>
        </div>
    );
};

export default MapViewComponent;
