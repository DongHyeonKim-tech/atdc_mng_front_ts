import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createLimeStore, history } from 'app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// import {setUserHandler } from "features/accounts/userUtils";

export const store = createLimeStore();

// setUserHandler();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
);
reportWebVitals();
