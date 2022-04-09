import React from "react";
import MovieControls from "./MovieControls";

export const MinhaLista = ({filme, type}) =>{
    return(
        <div className="movie-card">
            <div className="overlay"></div>
                {filme.Poster ? (
                        <img src={filme.Poster} alt='Poster' />
                    ) : (
                        <div className="filler-poster"></div>
                    )}
                    <MovieControls type={type} filme={filme}/>
        </div>
    )
}

export default MinhaLista;