export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_WATCHLIST":
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };
        case "REMOVE_MOVIE_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(filme => filme.imdbID !== action.payload),
            };
        case "ADD_MOVIE_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(filme => filme.imdbID !== action.payload.imdbID),
                watched: [action.payload, ...state.watched],
            }
        case "MOVE_MOVIE_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter(filme => filme.imdbID !== action.payload.imdbID),
                watchlist: [action.payload, ...state.watchlist],
            }
        case "REMOVE_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(filme => filme.imdbID !== action.payload),
            }
        default:
            return state;
    }
}