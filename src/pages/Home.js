import React, { Component } from 'react';
import { Title } from '../components/Title';
import {SearchForm} from '../components/SearchForm';
import {MoviesList} from '../components/MoviesList';
import {IconButton} from '../components/IconButton';
import GithubLogo from '../assets/icons/github.png';
import {PageBar} from '../components/PageBar';
import {getMovies} from '../provider/MovieProvider';

export class Home extends Component {
    constructor(props)
    { 
        super(props);
        this.state = { results: [], page: 0, maxPage: 0, totalResults: 0, query: '', usedSearch: false}
    }
    
    _handleResults = (results, page, maxPage, totalResults, query) =>
    {
        this.setState({results, page, maxPage, totalResults, query, usedSearch: true})
        //inicia en 0 para indicar que no se ha buscado, ahora lo aumentamos a 1
        this.props.aumentarPaginaActual();
    }
    _renderResults()
    {
        if(this.state.results.length === 0)
        {
            return <p> No results found</p>
        }
        else{
            return (
                <div>
                <p><strong>{this.state.totalResults} results for the search: '{this.state.query}'. Total of {this.state.maxPage} pages</strong></p>
                <MoviesList movies={this.state.results}/>
                </div>
            )
        }  
    }
    _renderPageBar()
    {
        return <PageBar
        maxPage={this.state.maxPage}
        currentPage={this.state.page}
        query={this.state.query} 
        changePage={this._changePage} 
        nextPage={this._nextPage} 
        previousPage={this._previousPage}/>
    }
    _getMoviesFromPage = async (pageNumber) =>
    {
        if(this.state.usedSearch)
        {
            // console.log(pageNumber);
            const decodedResp = await getMovies(pageNumber,this.state.query);
            const {page, results = []} = decodedResp;
            // console.log(decodedResp);
            this.props.guardarQuery(this.state.query);
            this.setState({page,results});
        }
        else if(!this.state.usedSearch && this.props.queryGuardado !== ''){
            // console.log("LEYENDO QUERY GUARDADO")
            // console.log(pageNumber);
            const decodedResp = await getMovies(pageNumber,this.props.queryGuardado);
            const {page, results = [], total_pages, total_results} = decodedResp;
            // console.log(decodedResp);
            this.setState({results, page, maxPage:total_pages, totalResults:total_results, query:this.props.queryGuardado, usedSearch: true})
        }
        
    }

    _changePage = (pageNumber) =>
    {
        this._getMoviesFromPage(pageNumber);
        this.props.guardarPaginaActual(pageNumber);
    }
    _nextPage= () =>
    {
        this._getMoviesFromPage(this.state.page+1);
        this.props.aumentarPaginaActual();
    }
    _previousPage = () =>
    {
        this._getMoviesFromPage(this.state.page-1);
        this.props.decrementarPaginaActual();
    }
    scrollToBottom = () => {
        this.startOfPage.scrollIntoView({ behavior: "smooth" });
      }
      
    componentDidMount() {
        
        if(this.props.paginaGuardada !== 0)
        {
            // console.log("QUERY GUARDADO MOUNT: " +this.props.queryGuardado);
            // console.log("PAGINA GUARDADA MOUNT:" + this.props.paginaGuardada);
            this.setState({query: this.props.queryGuardado});
            this._getMoviesFromPage(this.props.paginaGuardada);
        }
      }
      
    componentDidUpdate() {
        this.scrollToBottom();
      }
    
    render() 
    {
        return (
            
            <div>
                <div ref={start => this.startOfPage = start}></div>

                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper' >
                    <SearchForm onResults={this._handleResults} defaultText={this.props.queryGuardado} saveQueryToRedux={this.props.guardarQuery}/>
                </div>
                <br/>
                {this.state.usedSearch
                    ? this._renderPageBar()
                    : null
                }
                {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search for a movie</small>
                }
                {this.state.usedSearch
                    ? this._renderPageBar()
                    : null
                }

                <IconButton  link='https://github.com/Termtime' title='Github' imgLink={GithubLogo}  />
            </div>
        );
    }
}
