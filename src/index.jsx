import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ReduxStore from './reducers/store';
import App from './components/app';

import 'normalize.css';
import './style.scss';

const $root = document.getElementById('react-root');

ReactDOM.render(
    <Provider store={ReduxStore}>
        <App />
    </Provider>,
    $root
);
