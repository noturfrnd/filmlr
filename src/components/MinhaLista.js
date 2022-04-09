import React from "react";
import MovieControls from "./MovieControls";

export const MinhaLista = ({filme, type}) =>{
    // metodo para carregar as imagem dos fimes e <MovieControls carrega os componentes do Arquivo MovieControls.js
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