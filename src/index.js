import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App';
import './assets/scss/styles.css';
import {DataProvider} from './react/context/DataContext';
ReactDOM.render(
    <DataProvider>
        <App />
    </DataProvider>, 
    document.getElementById('app'));