import React from 'react';
import { ButtonBackToHome } from '../components/BackToHomeButton';

export const NotFound = () => (
    <div style={ {display:'flex', flexDirection:'column'}}>
        <div style={{alignSelf:'left'}}>
            <h1 style={ {color:'black', fontSize: 60} }>404!</h1>
            <h2>Page not found!</h2>
            <ButtonBackToHome align='left'><span></span>Return to Home</ButtonBackToHome>
        </div>
    </div>
)