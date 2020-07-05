import React, { Component } from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

export class PageBar extends Component {
    constructor(props){
        super(props);
        let pageArray = [[1]];
        if(props.maxPage !== 0) pageArray = this._splitInPages(props.maxPage);
    //    console.log(pageArray);
        this.state = { currentPage: 1, maxPage: props.maxPage, pageArray: pageArray, currentPageIndex: 0, isEnabled: true };
    }

    _splitInPages(maxNumber)
    {
        let numberArray = [];
        let arrayOfArrays = [];
        for(let i = 1; i <= maxNumber; i++)
        {
            numberArray.push(i);
        }
        for (var i=0; i<numberArray.length; i+=10) {
            arrayOfArrays.push(numberArray.slice(i,i+10));
       }

       return arrayOfArrays;
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.maxPage === 0 || nextProps.maxPage === null || nextProps.maxPage === undefined)
        {
            this.setState({currentPage:1, pageArray: [[1]], currentPageIndex: 0, isEnabled: false})
            return;
        }
        let pageArray = this._splitInPages(nextProps.maxPage);
        let currentPageIndex = parseInt((nextProps.currentPage-1)/10);
        if(currentPageIndex < 0) currentPageIndex = 0;
        this.setState({currentPage:nextProps.currentPage, pageArray, currentPageIndex, isEnabled: true, maxPage: nextProps.maxPage});
    }

    componentDidMount()
    {
        //hay que pasar la pagina actual cuando se este cargando de regreso
        this.setState({currentPage: this.props.currentPage});
    }
    
    render() {
        const {currentPage, maxPage, currentPageIndex = 0, pageArray = [], isEnabled} = this.state;
        const {previousPage, nextPage, changePage} = this.props;
        if(isEnabled)
        {
            return (
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <div className='pageNavBar'>
                        
                        {currentPage !== 1
                            ? <FirstArrow onClick={ () => changePage(1)} />
                            : <FirstArrow disabled={true} onClick={ () => changePage(1)}/>
                        }
                        {currentPage !== 1
                            ? <LeftArrow onClick={previousPage} />
                            : <LeftArrow disabled={true} onClick={previousPage}/>
                        }
    
                        {pageArray[currentPageIndex].map((number,i) => {
                            // console.log('rendering number: '+number)
                            if(number === currentPage)
                            {
                                if(window.innerHeight > 768)
                                {
                                    return <button key={'pageBar-'+number} className='button is-info is-size-7-mobile' onClick={() => changePage(number)}><strong>{number}</strong></button> 
                                }
                                return <button key={'pageBar-'+number} className='button is-info is-size-7-mobile px-2 py-2' onClick={() => changePage(number)}><strong>{number}</strong></button>
                            }else{
                                if(window.innerHeight > 768)
                                {
                                    return <button key={'pageBar-'+number} className='button is-size-7-mobile ' onClick={() => changePage(number)}><strong>{number}</strong></button>    
                                }
                                return <button key={'pageBar-'+number} className='button is-size-7-mobile px-2 py-2' onClick={() => changePage(number)}><strong>{number}</strong></button>
                            }
                        })}
    
                        {currentPage !== maxPage
                            ? <RightArrow onClick={nextPage}/>
                            : <RightArrow disabled={true} onClick={nextPage}/>
                        }
                        {currentPage !== maxPage
                            ? <LastArrow onClick={ () => changePage(maxPage)}/>
                            : <LastArrow disabled={true} onClick={ () => changePage(maxPage)}/>
                        }
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

const LeftArrow = ({disabled = false, onClick}) => {
    if(window.innerHeight > 768)
    {
        return (
            <button disabled={disabled} className='button is-size-7-mobile' onClick={onClick}>
                <i className='fas fa-arrow-left'></i>
            </button>
        );
    }
    return (
        <button disabled={disabled} className='button is-size-7-mobile px-1 py-2' onClick={onClick}>
            <i className='fas fa-arrow-left'></i>
        </button>
    )
}

const RightArrow = ({disabled = false, onClick}) => {
    if(window.innerHeight > 768)
    {
        return (
            <button disabled={disabled} className='button is-size-7-mobile' onClick={onClick}>
                <i className='fas fa-arrow-right' ></i>
            </button>
        );
    }
    return (
        <button disabled={disabled} className='button is-size-7-mobile px-1 py-2' onClick={onClick}>
            <i className='fas fa-arrow-right' ></i>
        </button>
    );
}

const FirstArrow = ({disabled = false, onClick}) => {
    if(window.innerHeight > 768)
    {
        return(
            <button disabled={disabled} className='button is-size-7-mobile' onClick={onClick}>
                <i className="fas fa-angle-double-left"></i>
            </button>  
        );
    }
    return(
        <button disabled={disabled} className='button is-size-7-mobile px-1 py-2' onClick={onClick}>
            <i className="fas fa-angle-double-left"></i>
        </button>  
    );
    
}

const LastArrow = ({disabled = false, onClick}) =>{
    if(window.innerHeight > 768)
    {
        return(
            <button disabled={disabled} className='button is-size-7-mobile' onClick={onClick}>
                <i className="fas fa-angle-double-right"></i>
            </button>  
        );
    }
    return(
        <button disabled={disabled} className='button is-size-7-mobile px-1 py-2' onClick={onClick}>
            <i className="fas fa-angle-double-right"></i>
        </button>  
    );
    
}
export default PageBar;