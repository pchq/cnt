import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './components/app';

import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
// import * as actions from './actions';


const store = createStore(reducer);
// const {dispatch} = store;
//
//
// const {inc, dec, rnd }= bindActionCreators(actions, dispatch);

// document
//     .addEventListener('keydown', (evt) => {
//         console.log(evt.keyCode);
//         switch (evt.keyCode){
//             case 107:
//                 inc();
//                 break;
//             case 109:
//                 dec();
//                 break;
//         }
//     });

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
