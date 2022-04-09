import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import MinhaLista from "./MinhaLista";

export const Watched = () => {
    // pega a lista de Assistidos do GlobalContext
    const {watched} = useContext(GlobalContext);
    return(
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">Filmes Assistidos</h1>
                <span className="count-pill">
                        {watched.length} filmes
                    </span>
            </div>
            {watched.length > 0 ? (
                <div className="movie-grid">
                    {watched.map(filme => (
                        <MinhaLista filme={filme} type='watched' />
                    ))}
                </div>
            ) : (
                <div className="no-movies">Oops não ha filmes aqui</div>
            )}
        </div>
    </div>
    )
}

export default Watched;