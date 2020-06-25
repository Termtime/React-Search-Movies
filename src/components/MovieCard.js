import React from 'react';
export const Card = ({imgSrc, title, year, handleClick, paginaGuardada}) =>
{
    
    return (
        <div>
            <div className="card-image">
                        <figure className="image">
                        <img 
                        src={imgSrc} 
                        alt={title}
                        />
                        </figure>
                    </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year != null || year !== undefined? year.substring(0,4): 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}