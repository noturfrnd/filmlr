export default (state, action) => {
    // recebe as acoes do GLOBALCONTEXT e trata os dados
    switch(action.type) {
        case "ADD_MOVIE_WATCHLIST":
            return{
                // state = dados iniciais
                ...state,
                // adiciona os dados mandados pela acao ao state->watchlist
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE_MOVIE_WATCHLIST":
            return {
                ...state,
                // verifica se o ID do filme passado pela ação esta no valor da lista
                watchlist: state.watchlist.filter(filme => filme.imdbID !== action.payload),
            };
        case "ADD_MOVIE_WATCHED":
            return {
                ...state,
                // tira o filme da lista de Assistir para depois adicionar a lista dos assistidos
                watchlist: state.watchlist.filter(filme => filme.imdbID !== action.payload.imdbID),
                watched: [action.payload, ...state.watched],
            }
        case "MOVE_MOVIE_WATCHLIST":
            return {
                ...state,
                // tira o filme da lista dos assistidos para depois adicionar na lista de Assistir
                watched: state.watched.filter(filme => filme.imdbID !== action.payload.imdbID),
                watchlist: [action.payload, ...state.watchlist],
            }
        case "REMOVE_WATCHED":
            return {
                ...state,
                // retira o filme da lista do assistidos
                watched: state.watched.filter(filme => filme.imdbID !== action.payload),
            }
        default:
            return state;
    }
}