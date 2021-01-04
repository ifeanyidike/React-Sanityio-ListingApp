import {combineReducers} from "redux"

import {
    fetchAllMoviesReducer,
    fetchMovieByIdReducer,
    sortMoviesByReducer,
    getMostPopularReducer,
    fetchMoviesByRefReducer
} from "./movieReducers"

import {
    fetchAllPersonsReducer,
    fetchPersonByIdReducer,
    countPersonsReducer
} from "./personReducers"

import {toggleTheme} from "./globalReducers"

export default combineReducers({
    fetchAllMoviesReducer,
    fetchMovieByIdReducer,
    fetchAllPersonsReducer,
    fetchPersonByIdReducer,    
    sortMoviesByReducer,
    getMostPopularReducer,
    countPersonsReducer,
    fetchMoviesByRefReducer,
    toggleTheme
})