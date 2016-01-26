import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/containers/App';

/**
 * Entry Point
 */
const store = configureStore();
let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
