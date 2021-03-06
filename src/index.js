import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './Routes';
import store  from './Redux/Reducers/index'

ReactDOM.render(<Provider store={store}>
    <Routes></Routes>
</Provider>, document.getElementById('root'));
