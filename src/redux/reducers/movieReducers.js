import { 
    MOVIE_FETCH_FAIL, 
    MOVIE_FETCH_REQUEST, 
    MOVIE_FETCH_SUCCESS,
    MOVIES_FETCH_FAIL, 
    MOVIES_FETCH_REQUEST, 
    MOVIES_FETCH_SUCCESS, 
    MOVIES_SORT_REQUEST,
    MOVIES_SORT_SUCCESS,
    MOVIES_SORT_FAIL,
    MOVIES_MOST_POPULAR_REQUEST,
    MOVIES_MOST_POPULAR_SUCCESS,
    MOVIES_MOST_POPULAR_FAIL,
    MOVIES_FETCH_RESET,
    MOVIES_REF_FETCH_REQUEST,
    MOVIES_REF_FETCH_SUCCESS,
    MOVIES_REF_FETCH_FAIL
} from "../constants/movieConstants"

const fetchAllMoviesReducer = (state = {}, action) =>{
    switch(action.type){
        case MOVIES_FETCH_REQUEST:
            return {
                loading: true
            }
        case MOVIES_FETCH_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case MOVIES_FETCH_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case MOVIES_FETCH_RESET:
            return{ }
        default:
            return state
    }    
}

const fetchMoviesByRefReducer = (state = {}, action) =>{
    switch(action.type){
        case MOVIES_REF_FETCH_REQUEST:
            return {
                loading: true
            }
        case MOVIES_REF_FETCH_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case MOVIES_REF_FETCH_FAIL:
            return{
                loading: false,
                error: action.payload
            }
       
        default:
            return state
    }    
}


const fetchMovieByIdReducer = (state = {}, action) =>{
    switch(action.type){
        case MOVIE_FETCH_REQUEST:
            return {
                loading: true
            }
        case MOVIE_FETCH_SUCCESS:
            return {
                loading: false,
                movie: action.payload
            }
        case MOVIE_FETCH_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }    
}

const sortMoviesByReducer = (state = {}, action) =>{
    switch(action.type){
        case MOVIES_SORT_REQUEST:
            return {
                loading: true
            }
        case MOVIES_SORT_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case MOVIES_SORT_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }    
}

const getMostPopularReducer = (state = {}, action) =>{
    switch(action.type){
        case MOVIES_MOST_POPULAR_REQUEST:
            return {
                loading: true
            }
        case MOVIES_MOST_POPULAR_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        case MOVIES_MOST_POPULAR_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }    
}

export {
    fetchAllMoviesReducer,
    fetchMovieByIdReducer,
    sortMoviesByReducer,
    getMostPopularReducer,
    fetchMoviesByRefReducer
}