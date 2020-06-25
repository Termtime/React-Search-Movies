import React from 'react';
import {Link} from 'react-router-dom';


export const ButtonBackToHome = ({align='center', children}) => (
    
    <Link 
    className='button is-info MovieDetail-button'
    style={{alignSelf:align}}
    to='/'>
        {children}
    </Link>
);