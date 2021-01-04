import sanityAPI from "../../sanitySetup"
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
    MOVIES_REF_FETCH_SUCCESS,
    MOVIES_REF_FETCH_FAIL,
    MOVIES_REF_FETCH_REQUEST
} from "../constants/movieConstants"

const fetchAllMovies = () => async(dispatch) =>{
    
    try {
        dispatch({
            type: MOVIES_FETCH_REQUEST
        })        
        const data = await sanityAPI.fetch(
            `*[_type == 'movie']{                                             
                _id,
                "poster" : poster.asset->url,
            } `
        )
        
        dispatch({
            type: MOVIES_FETCH_SUCCESS,
            payload: data
        })
                
    } catch (error) {
        dispatch({
            type: MOVIES_FETCH_FAIL,
            payload: error.message
        })
    }
}


const fetchMoviesByRef = (ref) => async(dispatch) =>{
    
    try {
        dispatch({
            type: MOVIES_REF_FETCH_REQUEST
        })
        
        const data = await sanityAPI.fetch(
            `*[_type == 'movie' 
            && (castMembers[person._ref match '${ref}'] || 
                crewMembers[person._ref match '${ref}'])            
            ]{                                             
                _id,                              
                "poster" : poster.asset->url,
                title
            } `
        )
        
        dispatch({
            type: MOVIES_REF_FETCH_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: MOVIES_REF_FETCH_FAIL,
            payload: error.message
        })
    }
}


const fetchMovieById = (id) => async(dispatch) =>{
    
    try {
        dispatch({
            type: MOVIE_FETCH_REQUEST
        })
        
        const data = await sanityAPI.fetch(
            `*[_type == 'movie' && _id == '${id}']{                                                
                _id,
                "cast" :
                    castMembers[]{
                        "ref": person._ref,
                        characterName, 
                        "name": person->name,
                        "image": person->image.asset->url
                    }
                ,
                "crew" :
                    crewMembers[]{
                        "ref": person._ref,
                        department, 
                        job,
                        "name": person->name,
                        "image": person->image.asset->url
                    }
                ,                
                "overview":   {                    
                    "text": overview[0].children[0].text
                  },
                popularity,
                "poster" : poster.asset->url,
                releaseDate,                                
                title
            }[0]`
        )
        
        dispatch({
            type: MOVIE_FETCH_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: MOVIE_FETCH_FAIL,
            payload: error.message
        })
    }
}


const sortMoviesBy = (item, type) => async(dispatch) =>{
    
    try {
        dispatch({
            type: MOVIES_MOST_POPULAR_REQUEST
        })
        
        const data = await sanityAPI.fetch(
            `*[_type == 'movie']{                                
                _id,                                               
                "poster" : poster.asset->url,    
                title
                } | order( ${item} ${type})`
        )
        
        dispatch({
            type: MOVIES_SORT_SUCCESS,
            payload: data
        })       
        
    } catch (error) {
        dispatch({
            type: MOVIES_SORT_FAIL,
            payload: error.message
        })
    }
}


const getMostPopular = () => async(dispatch) =>{
    
    try {
        dispatch({
            type: MOVIES_SORT_REQUEST
        })
        
        const data = await sanityAPI.fetch(
            `
            *[_type == 'movie']{ 
                _id,                              
                "overview":   {                    
                    "text": overview[0].children[0].text
                },                
                "poster" : poster.asset->url,    
                title 
            }| order(popularity desc) [0..2]`
        )
        
        dispatch({
            type: MOVIES_MOST_POPULAR_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: MOVIES_MOST_POPULAR_FAIL,
            payload: error.message
        })
    }
}



export {
    fetchAllMovies,
    fetchMovieById,
    sortMoviesBy,
    getMostPopular,
    fetchMoviesByRef
}