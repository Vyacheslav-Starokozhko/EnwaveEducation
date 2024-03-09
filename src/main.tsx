import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {BrowserRouter} from "react-router-dom";

const setupStore = store();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={setupStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)