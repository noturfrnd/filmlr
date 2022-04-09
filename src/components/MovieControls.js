import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({filme, type}) => {
    // pegando as Acoes do GlobalContext para usar neste componente
    const { removerFilmeDaLista, adicioinarFilmeAssistido, removerFilmeAssistido, moverFilmeParaLista } = useContext(GlobalContext);

    return(
        <div className="inner-card-controls">
            {type === 'watchlist' ? (
                // ^^^^ testando se a lista que esta sendo vista agora é a de Assistir
                <div>
                    <button className="ctrl-btn"
                    // ao clickar no botao, adiciona o filme a lista dos assistidos
                    onClick={() => adicioinarFilmeAssistido(filme)}
                    >
                        <i title="Adicionar aos Assitidos" className="fa-eyedropper">+</i>
                    </button>

                    <button className="ctrl-btn"
                    // ao clickar no botao, remove o filme da lista de Assistir
                    onClick={() => removerFilmeDaLista(filme.imdbID)}
                    >
                        <i title="Remover" className="fa-solid fa-eye-slash">✖</i>
                    </button>
                </div>
            ) : ''}

            {type === 'watched' && (
                // ^^^^ testando se a lista que esta sendo vista agora é a de Assistidos
                <div>
                <button className="ctrl-btn"
                // ao clickar no botao, move o filme para de volta para a lista de Assitir
                onClick={() => moverFilmeParaLista(filme)}
                >
                    <i title="Retornar a lista" className="fa-eyedropper">+</i>
                </button>

                <button className="ctrl-btn"
                // ao clickar no botao, remove o filme da lista de Assistido
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