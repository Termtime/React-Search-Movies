import React from 'react';

export const RatingStars = ({rating}) =>
{
    //calculos para el calculo de estrellas
    let starArray = []
    const numOfStars = rating/2; //porque esta en una notacion de 10 estrellas
    const intStars = parseInt(numOfStars);
    const doubleStars = numOfStars - intStars;
    const emptyStars = Math.abs(parseInt(numOfStars - 5));
    
    for(let i = 0; i < intStars; i++)
        starArray.push(<i key={`fullStar-${i}`} className="fas fa-star"></i>)

    if(doubleStars > 0.3 && doubleStars < 0.7) 
        starArray.push(<i key='halfStar-end' className="fas fa-star-half-alt"></i>)
    else if(doubleStars >= 0.7)
        starArray.push(<i key='fullStar-last' className="fas fa-star"></i>)
    else if(doubleStars <= 0.3) 
        starArray.push(<i key='empty-star-end' className="far fa-star"></i>)
    
    for(let i = 0; i < emptyStars; i++)
        starArray.push(<i key={`empty-star-${i}`} className="far fa-star"></i>)

    return starArray.map((star) => {
        return star;
    });
    
}