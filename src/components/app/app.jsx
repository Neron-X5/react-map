import React from 'react';

import ErrorBoundary from '../error-boundary';
import MapView from '../map-view';
import AddressList from '../address-list';

import './style.scss';

const AppComponent = () => {
    return (
        <div className='app-container'>
            <header className='header'>
                <h1>React Map</h1>
            </header>
            <ErrorBoundary>
                <main className='main'>
                    <MapView />
                    <AddressList />
                </main>
            </ErrorBoundary>
        </div>
    );
};

export default AppComponent;
