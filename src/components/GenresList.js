import React from 'react';

export const GenresList = ({genres}) => {

    return genres.map((genre, index) => {
        return (
            <div key={genre.name} className='MovieDetail-genreItem-container' >
                <div className='box has-background-info is-marginless px-2 py-2 MovieDetail-genreItem '>
                    <span className='has-text-white is-unselectable'>{genre.name}</span>
                </div>
            </div>
        );
    })
}