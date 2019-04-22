import React from 'react'
import {Route} from 'react-router-dom';
import App from './App';
import Home from './containers/Home';
import Translation from './containers/Translation';
import NotFind from './containers/NotFind'

export default [{
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home'
        },
        {
            path: '/Translation',
            component: Translation,
            exact: true,
            loadData: Translation.loadData,
            key: 'translation'
        },
        {
            component: NotFind
        }
    ]
}]
