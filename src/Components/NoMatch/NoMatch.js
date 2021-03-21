import React from 'react';
import { Alert } from 'react-bootstrap';
import './NoMatch.css'

const NoMatch = () => {
 
    return (
        <div className="error">
            <div className='container'>
            
            {[ 'danger' ].map((variant, idx) => 
                (<Alert key={idx} variant={variant}>
                    <h3 className='text-center p-3'>This is a 404 error !!! page not found !! &#128533; </h3>
                    <Alert.Link href={`https://en.wikipedia.org/wiki/HTTP_404`}><h4 className='text-center p-3'>Know more about it... &#128578;</h4></Alert.Link>.
                </Alert> ))} 
             </div>
        </div>
       
   
    );
};

export default NoMatch;