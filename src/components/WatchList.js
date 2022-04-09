import { film } from "fontawesome";
import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { MinhaLista } from "./MinhaLista";
import MovieControls from "./MovieControls";

export const WatchList = () => {
    const {watchlist} = useContext(GlobalContext);
    return(
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Minha Lista</h1>
                    <span className="count-pill">
                        {watchlist.length} filmes
                    </span>
                </div>
                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map(filme => (
                            <MinhaLista filme={filme} type='watchlist' />
                        ))}
                    </div>
                ) : (
                    <div className="no-movies">Oops não a filmes aqui</div>
                )}
            </div>
        </div>
    )
}

export default WatchList;