import {ACTIONS} from './actions'
const INITIAL_STATE = {
    paginaGuardada: 0,
    queryGuardado: '',
}

export function buscadorApp(state = INITIAL_STATE, action){
    // console.log("NEW ACTION RECEIVED - CURRENT STATE AND ACTION:")
    // console.log(state, action);
    switch(action.type){
        case ACTIONS.GUARDAR_PAGINA:
            // console.log('PAGINA GUARDADA: ' + action.pagina);
            return {...state,paginaGuardada: action.pagina};

        case ACTIONS.GUARDAR_QUERY:
            if(action.query === state.queryGuardado) return state; //si es el mismo query el que se va a guardar, no crear un nuevo estado

            //si no es el mismo, entonces hay que limpiar la pagina guardada, ya que empezara por 1 otra vez
            // console.log('QUERY SAVED: ' + action.query);
            return {paginaGuardada: 1, queryGuardado: action.query};

        case ACTIONS.AUMENTAR_PAGINA:
            // console.log(`AUMENTANDO PAGINA`);
            return {...state, paginaGuardada: state.paginaGuardada+1};

        case ACTIONS.DECREMENTAR_PAGINA:
            // console.log(`DECREMENTANDO PAGINA`);
            return {...state, paginaGuardada: state.paginaGuardada-1};
        default:
            return state;
    }
}