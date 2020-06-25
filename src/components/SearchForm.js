import React, { Component } from 'react';
import {getMovies} from '../provider/MovieProvider';
export class SearchForm extends Component{

    state={
        inputMovie: this.props.defaultText
    }
    _handleChange = (e) =>
    {
        this.setState({inputMovie: e.target.value});
    }
    _handleSubmit = async (e) =>
    {
        e.preventDefault();
        const {inputMovie} = this.state;
        const decodedResp = await getMovies(null, inputMovie );
        const {page, total_pages, results = [], total_results} = decodedResp;
        // console.log({results, page, total_pages});
        this.props.onResults(results, page, total_pages, total_results, inputMovie);
        this.props.saveQueryToRedux(inputMovie);
    }
    render()
    {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className='field has-addons'>
                    <div className='control'>
                        <input 
                        className='input' 
                        type='text' 
                        onChange={this._handleChange}
                        value={this.state.inputMovie}
                        placeholder='Search online for movies'/>
                    </div>
                    <div className='control'>
                        <button className='button is-info'>Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

SearchForm.defaultProps = {
    defaultText : ''
}