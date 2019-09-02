import React, { Component } from 'react';

import MapView from '../map-view';
import AddressList from '../address-list';

import './style.scss';

class AppComponent extends Component {
    render() {
        return (
            <div className='app-container'>
                <header className='header'>
                    <h1>React Map</h1>
                </header>
                <main className='main'>
                    <MapView />
                    <AddressList />
                </main>
            </div>
        );
    }
}

export default AppComponent;
