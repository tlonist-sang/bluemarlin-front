import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {CookiesProvider} from "react-cookie";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>,
    document.querySelector("#root")
);
