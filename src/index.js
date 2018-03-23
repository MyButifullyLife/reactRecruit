import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore,applyMiddleware} from 'redux'
import  thunkMiddleware  from  'redux-thunk'
import {Provider} from  'react-redux'

import {BrowserRouter,Route} from 'react-router-dom'
import  reducers from './reducer'

import Login from './container/login/login'
import Register from './container/register/register'
import  AuthRoute from  './component/authroute/authroute'


const store  = createStore(reducers,  applyMiddleware(thunkMiddleware));

function Boss(){
     return <h2> Boss 页面</h2>
}
ReactDOM.render(
    (<Provider store={store}>
       <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/boss" component={Boss}>
                </Route>
                <Route path="/login" component={Login}>
                </Route>
                <Route path="/register" component={Register}>
                </Route>

            </div>

       </BrowserRouter>
    </Provider>)
    , document.getElementById('root'));
registerServiceWorker();
