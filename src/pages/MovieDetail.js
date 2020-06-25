import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Title} from '../components/Title';
import noImg from '../assets/images/no-image.jpg';
import { ButtonBackToHome } from '../components/BackToHomeButton';
import {RatingStars} from '../components/RatingStars';
import {GenresList} from '../components/GenresList';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const API_KEY='a7e6ee73e89238874c2e6eb5c09c341e';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'http://image.tmdb.org/t/p/w500';
export class MovieDetail extends Component {
    static propTypes = {
        match : PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state = {
        title: '',
        poster: '',
        actors: [],
        rating: 0,
        overview: '',
        genres: [],
    }

    _fetchMovie = async (id) =>
    {
        //hacer fetch del titulo, poster, rating y el overview de la peli
        const infoResp = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const movie = await infoResp.json();
        const {original_title, poster_path, overview, vote_average, genres} = movie;

        //hacer fetch de los actores
        const actResp  =await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
        const credits = await actResp.json();
        const {cast} = credits;
        let actors = cast.map(castItem => castItem.name);
        let finalPoster;
        if(poster_path === null || poster_path === undefined || poster_path === '') finalPoster =  noImg
        else finalPoster = `${IMAGE_URL}${poster_path}`
        this.setState({title: original_title, poster: finalPoster, overview, actors, rating: vote_average, genres })
    }

    componentDidMount()
    {
        const {id} = this.props.match.params;
        this._fetchMovie(id);
    }

    
    render() {
        const {title, poster, overview, rating, genres} = this.state;
        const displayRating = (rating/2).toFixed(1);
        return (
            <div className='MovieDetail'>
                    <Title>{title}</Title>
                <div className='MovieDetail-header'>
                    <ButtonBackToHome align='start'><i className="fas fa-arrow-left"></i></ButtonBackToHome>
                    <figure className='image MovieDetail-banner'>
                        <img src={poster} alt={title}/>
                    </figure>
                    <div className='MovieDetail-overview'>
                        <h2 className='subtitle mb-2 MovieDetail-h2'><strong>Movie Overview</strong></h2>
                        <hr className='MovieDetail-hr'/>
                        <p>{overview}</p>
                        <br/>
                        <div className='ratingStars'>
                            <span><RatingStars rating={rating} /> { displayRating }/5</span>
                        </div>
                        
                        <div className='MovieDetail-genreList'>
                            <GenresList genres={genres}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}