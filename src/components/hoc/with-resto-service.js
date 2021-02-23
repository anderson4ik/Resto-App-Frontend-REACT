import React from 'react';

import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
           <RestoServiceContext.Consumer>
               {
                   (RestoService) => {
                       return <Wrapped {...props} RestoService={RestoService}/>
                   }
               }
           </RestoServiceContext.Consumer>
        );
    }
};

export default WithRestoService;
// using high order component that is wrapp component App and give it accees to the context by consumer
