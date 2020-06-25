import React from 'react';

export const IconButton = ({title = '', imgLink, link ='#', alignment='center'}) =>
{
    return (
            <div className='iconButton-container' style={{justifyContent:alignment}}>
                <a href={link} style={ {width:30, alignSelf:alignment } } className='hoverReactive'>
                    <img
                    src={imgLink}
                    alt={title+'iconButton'}/>
                </a>
                <small style={ {display:'flex',alignSelf:alignment}}>{title}</small>
            </div>
    );
}