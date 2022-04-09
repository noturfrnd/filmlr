import React, {useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Filmes = ({filme}) => {
    const {
        adiconarFilmeAssistir, watchlist, watched, adicioinarFilmeAssistido
    } = useContext(GlobalContext);

    
    let filmesNaLista = watchlist.find(a => a.imdbID === filme.imdbID);
    let filmesAssistidos = watched.find(a => a.imdbID === filme.imdbID);

    const disableAddBtn = filmesNaLista || filmesAssistidos ? true : false;
    const disableWatched = filmesAssistidos ? true : false;

    return(
        <div className="result-card">
            <div className="post-wrapper">
                {filme.Poster ? (
                    <img src={filme.Poster} alt='Poster' />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{filme.Title}</h3>
                    <h4 className="release-date">
                        {filme.Year}
                    </h4>
                </div>

                <div className="controls">
                    <button className="btn"
                    onClick={() => adiconarFilmeAssistir(filme)}
                    disabled={disableAddBtn}
                    >
                        Adicionar a Lista
                    </button>
                </div>
                <div className="controls">
                    <button className="btn"
                    onClick={() => adicioinarFilmeAssistido(filme)}
                    disabled={disableWatched}
                    >
                        Adicionar aos Assistidos
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Filmes;