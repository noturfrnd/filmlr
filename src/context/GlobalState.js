import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

// valor inicial

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// criar context
export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // salvar state no navegador para manter dados ao recarregar pagina
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);


    // actions

    const adiconarFilmeAssistir = (filme) => {
        dispatch({ type: "ADD_MOVIE_WATCHLIST", payload: filme });
    };

    const removerFilmeDaLista = (id) => {
        dispatch({ type: "REMOVE_MOVIE_WATCHLIST", payload: id});
    }

    const adicioinarFilmeAssistido = (filme) => {
        dispatch({ type: "ADD_MOVIE_WATCHED", payload: filme});
    };

    const moverFilmeParaLista = (filme) => {
        dispatch({ type: "MOVE_MOVIE_WATCHLIST", payload: filme});
    };

    const removerFilmeAssistido = (id) =>{
        dispatch({ type: "REMOVE_WATCHED", payload: id});
    }

    return (
        <GlobalContext.Provider value={{ 
            watchlist: state.watchlist, 
            watched: state.watched,
            adiconarFilmeAssistir: adiconarFilmeAssistir,
            removerFilmeDaLista,
            adicioinarFilmeAssistido,
            moverFilmeParaLista,
            removerFilmeAssistido }}>
            {props.children}
        </GlobalContext.Provider>
    )
}