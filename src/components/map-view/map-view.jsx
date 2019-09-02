import React from 'react';

import './style.scss';

const MapViewComponent = () => {
    return (
        <div className='map-view-container'>
            <section className='section'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Germany_River_Werre_Map.svg/1677px-Germany_River_Werre_Map.svg.png'
                    alt='map-view'
                    className='map'
                />
            </section>
        </div>
    );
};

export default MapViewComponent;
