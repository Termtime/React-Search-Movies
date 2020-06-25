import {connect} from 'react-redux';
import {Movie} from '../components/Movie';
import { ACTIONS } from '../reducers/actions';

const mapStateToProps = state => {
    return {
        paginaGuardada: state.paginaGuardada
    }
}

const mapDispatchToProps = dispatch => {
    return{
        guardarPaginaActual: (pagina) => dispatch({type:ACTIONS.GUARDAR_PAGINA, pagina})
    }
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const MovieContainer = connectFunction(Movie);