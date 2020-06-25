import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import noImage from '../assets/images/no-image.jpg';
import { Card } from './MovieCard';

export class Movie extends Component {
    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        id : PropTypes.string,
    }

    render()
    {
        const {title, year, poster, id} = this.props;
        // console.log(`VALOR DE PAGINA GUARDADA: ${paginaGuardada}`)
        const imgSrc= poster === null 
        ? noImage
        : 'http://image.tmdb.org/t/p/w500'+poster;

        return (
            <Link to={`/detail/${id}`} className="card">
                <Card title={title} year={year} imgSrc={imgSrc}/>
            </Link>
        )
    }
}