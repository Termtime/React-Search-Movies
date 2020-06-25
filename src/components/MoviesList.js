import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MovieContainer} from '../containers/MovieContainer';

export class MoviesList extends Component{
    static propTypes = {
        movies: PropTypes.array
    }
    
    render()
    {
        const {movies} = this.props;
        return(
            <div className='MoviesList'>
                {
                    movies.map( movie => {
                        return (
                            <div key={movie.id} className='MoviesList-item'>
                                <MovieContainer 
                                    id={movie.id.toString()}
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                    year={movie.release_date}
                                />
                            </div>
                        );
                    })
                }
            </div>
        )
        
    }
  }