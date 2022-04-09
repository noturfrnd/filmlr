import React, {useState, useEffect} from "react";
import { Filmes } from "./Filmes";


export const Add = () =>{
    // variaveis de controle para acesso aos dados
    const [busca, setBusca] = useState("");
    const [filmes, setFilmes] = useState([]);

    const onChange = event => {
        // evento executado quando algum texto é digitado no campo de BUSCAR FILMES

        // preenchendo variavel de Busca com o valor digitado no campo
        setBusca(event.target.value);

        // METODO para buscar API de filmes e trazer todos os dados em forma de TEXTO
        fetch(`http://www.omdbapi.com/?s=${busca !== "" ? busca : event.target.value}&apikey=df31fbcf`)
        .then((res) => res.json()).then((data) => {
            //        ^^^^^^^ transformando os dados EM TEXTO da api para JSON, facilitando o tratamento
            if(!data.errors){
                // se nao houver erros, os filmes buscados pela API sao armazenados na variavel FILMES
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
                        // Executar evento quando algo for digitado
                        onChange={onChange}
                        >

                        </input>
                    </div>

                    {filmes !== undefined && filmes.length > 0 ? (
                        <ul className="results">
                            {filmes.map(filme => (
                                // mapear variavel para exibir uma lista dos filmes nela
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