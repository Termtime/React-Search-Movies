import {connect} from 'react-redux';
import {Home} from '../pages/Home';
import {ACTIONS} from '../reducers/actions';
const mapStateToProps = state => {
    return {
        paginaGuardada: state.paginaGuardada,
        queryGuardado: state.queryGuardado,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        guardarQuery: query => dispatch({type: ACTIONS.GUARDAR_QUERY, query }),
        guardarPaginaActual: pagina => dispatch({type: ACTIONS.GUARDAR_PAGINA, pagina}),
        aumentarPaginaActual: () => dispatch({type: ACTIONS.AUMENTAR_PAGINA}),
        decrementarPaginaActual: () => dispatch({type: ACTIONS.DECREMENTAR_PAGINA}),
    }
}
const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const HomeContainer = connectFunction(Home);