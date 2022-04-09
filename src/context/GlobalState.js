import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

// valor inicial, buscar se ja existem filmes marcados como watched e em watchlist

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// criar context para passar valores para as paginas
export const GlobalContext = createContext(initialState);

// provider component --- criar acoes e metodos para tratar e passar valores

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // salvar state(valor) no navegador para manter dados ao recarregar pagina
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);


    // actions

    // adiciona um filme na lista dos filmes a assistir
    const adiconarFilmeAssistir = (filme) => {
        dispatch({ type: "ADD_MOVIE_WATCHLIST", payload: filme });
    };

    // remove um filme da lista dos filmes a assistir
    const removerFilmeDaLista = (id) => {
        dispatch({ type: "REMOVE_MOVIE_WATCHLIST", payload: id});
    }

    // adiciona um filme na lista dos assistidos, se o filme tiver na lista dos a assistir ele tbm é removido dela
    const adicioinarFilmeAssistido = (filme) => {
        dispatch({ type: "ADD_MOVIE_WATCHED", payload: filme});
    };

    // move um filme dos Assistidos para Assistir
    const moverFilmeParaLista = (filme) => {
        dispatch({ type: "MOVE_MOVIE_WATCHLIST", payload: filme});
    };

    // remove o filme da lista dos Assistidos
    const removerFilmeAssistido = (id) =>{
        dispatch({ type: "REMOVE_WATCHED", payload: id});
    }

    // contexto com todas as acoes juntas
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