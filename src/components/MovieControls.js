import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({filme, type}) => {
    const { removerFilmeDaLista, adicioinarFilmeAssistido, removerFilmeAssistido, moverFilmeParaLista } = useContext(GlobalContext);

    return(
        <div className="inner-card-controls">
            {type === 'watchlist' ? (
                <div>
                    <button className="ctrl-btn"
                    onClick={() => adicioinarFilmeAssistido(filme)}
                    >
                        <i title="Adicionar aos Assitidos" className="fa-eyedropper">+</i>
                    </button>

                    <button className="ctrl-btn"
                    onClick={() => removerFilmeDaLista(filme.imdbID)}
                    >
                        <i title="Remover" className="fa-solid fa-eye-slash">✖</i>
                    </button>
                </div>
            ) : ''}

            {type === 'watched' && (
                <div>
                <button className="ctrl-btn"
                onClick={() => moverFilmeParaLista(filme)}
                >
                    <i title="Retornar a lista" className="fa-eyedropper">+</i>
                </button>

                <button className="ctrl-btn"
                onClick={() => removerFilmeAssistido(filme.imdbID)}
                >
                    <i title="Remover" className="fa-solid fa-eye-slash">✖</i>
                </button>
                </div>
            )}
        </div>
    )
}

export default MovieControls;