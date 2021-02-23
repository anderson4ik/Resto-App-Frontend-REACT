import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import ErrorBoundry from './components/error-boundry';
import RestoService  from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

const restoService = new RestoService();


ReactDOM.render(
    <Provider store={store}> 
    {/*give the access to store through all levels of app by { connect } from 'react-redux'*/}
       <ErrorBoundry>
           <RestoServiceContext.Provider value={restoService}>
               <Router>
                   <App />
               </Router>
           </RestoServiceContext.Provider>
       </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

