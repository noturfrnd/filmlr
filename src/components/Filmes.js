import React, {useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Filmes = ({filme}) => {
    // pegando as acoes e as listas do GlobalContext
    const {
        adiconarFilmeAssistir, watchlist, watched, adicioinarFilmeAssistido
    } = useContext(GlobalContext);

    // testar de o filme ja esta na lista de Assistir
    let filmesNaLista = watchlist.find(a => a.imdbID === filme.imdbID);
    // testar de o filme ja esta na lista de Assistidos
    let filmesAssistidos = watched.find(a => a.imdbID === filme.imdbID);

    // variaveis de teste para desabilitar botoes de ADICIONAR AS LISTAS
    // se o filme estiver em qualquer das listas, a variavel é TRUE, se nao estiver em nenhuma dela FALSE
    const disableAddBtn = filmesNaLista || filmesAssistidos ? true : false;
    // a variavel so é TRUE se o filme estiver na lista do Assistidos
    const disableWatched = filmesAssistidos ? true : false;

    return(
        <div className="result-card">
            {/* espaço para o poster do filme */}
            <div className="post-wrapper">
                {filme.Poster ? (
                    <img src={filme.Poster} alt='Poster' />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    {/* titulo e ano do filme */}
                    <h3 className="title">{filme.Title}</h3>
                    <h4 className="release-date">
                        {filme.Year}
                    </h4>
                </div>

                <div className="controls">
                    <button className="btn"
                    onClick={() => adiconarFilmeAssistir(filme)}
                    // se a variavel for TRUE, o botao é desabilitado, ou seja, nao pode ser clickado
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