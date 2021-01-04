import React, { useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchMoviesByRef} from "../redux/actions/movieActions"
import {fetchPersonById} from "../redux/actions/personActions"
import {useLocation, Link} from "react-router-dom"
import queryString from "query-string"
import {PersonContainer} from "../styles/PersonStyle"
import UpdateIcon from '@material-ui/icons/Update';
import Loader from "../components/BackdropLoader"
import {avatarUrl} from "../styles/definition"

const PersonPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    
    const {id} = queryString.parse(location.search)
    
    useEffect(()=>{
        dispatch(fetchPersonById(id))
        dispatch(fetchMoviesByRef( id)) 
    },[dispatch, id])
    
    const {loading, error, person} = useSelector(state => state.fetchPersonByIdReducer)
    const {loading: moviesLoading, error: moviesError, movies} 
    = useSelector(state => state.fetchMoviesByRefReducer)
  
    return (
        <PersonContainer>
            
                    <div className="personpanel">  
                        {
                            loading ? <Loader /> :
                             error ? error :
                            person && (                  
                            <div className="topcontent">
                                <div className="description">
                                    <h2 className="title">{person.name}</h2>                                                           
                                </div>
                
                                <div className="person">
                                    <img  
                                        src={person.image ? person.image : avatarUrl} 
                                        alt={person.title} />               
                                </div>                                                      
                            </div>
                        )}
                        
                        <div className="featuredmovies">
                             <div className="membersince">
                                <UpdateIcon fontSize="large" />
                                <small>{person && new Date(person._createdAt).getFullYear()}</small>
                             </div>   
                            <div>
                                <h3>Featured Movies</h3>
                                {
                                   moviesLoading ? <Loader /> :
                                   moviesError ? moviesError :
                                   movies && (
                                    movies.map(movie =>(
                                        <Link className="featuredimage" 
                                         to={`/movie?id=${movie._id}`} 
                                         key={movie._id}
                                         >
                                            <img 
                                                src={movie.poster ? movie.poster : avatarUrl}
                                                alt={movie.title} />
                                            <p>{movie.title}</p>
                                        
                                        </Link>
                                    ))
                                   )
                                }
                            </div>
                        </div>
                    </div>                            
            
        </PersonContainer>
    )
}

export default PersonPage
