import React, {useState, useEffect} from "react";
import { Filmes } from "./Filmes";


export const Add = () =>{
    const [busca, setBusca] = useState("");
    const [filmes, setFilmes] = useState([]);

    const onChange = event => {

        setBusca(event.target.value);

        fetch(`http://www.omdbapi.com/?s=${busca !== "" ? busca : event.target.value}&apikey=df31fbcf`)
        .then((res) => res.json()).then((data) => {
            if(!data.errors){
                setFilmes(data.Search)
            }
        })
    }

    return(
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type='text' placeholder="Procure um filme"
                        value={busca}
                        onChange={onChange}
                        >

                        </input>
                    </div>

                    {filmes !== undefined && filmes.length > 0 ? (
                        <ul className="results">
                            {filmes.map(filme => (
                                <li key={filme.imdbID}>
                                    <Filmes filme={filme} />
                                </li>
                            ))}
                        </ul>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}

export default Add;