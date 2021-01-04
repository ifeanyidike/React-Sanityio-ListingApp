import React, {useEffect} from 'react'
import {MovieContainer} from "../styles/MovieStyles"
import {useDispatch, useSelector} from "react-redux"
import {fetchMovieById} from "../redux/actions/movieActions"
import {useLocation, Link} from "react-router-dom"
import queryString from "query-string"
import Loader from "../components/BackdropLoader"
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {avatarUrl} from "../styles/definition"

const MoviePage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {id} = queryString.parse(location.search)
    
    useEffect(()=>{                
        dispatch(fetchMovieById(id))        
    }, [dispatch, id])
    
    const {loading, error, movie} = useSelector(state => state.fetchMovieByIdReducer)    
    return (
        <MovieContainer>
            {
                loading ? <Loader /> :
                error ? error :
                movie && (
                <>
                    <div className="topcontent">
                
                        <div className="movie">
                            <img  src={movie.poster} alt={movie.title} />               
                        </div>
                                      
                        <div className="description">
                            <h2 className="title">{movie && movie.title}</h2>
                            <p>
                                {movie.overview.text}                            
                            </p>
                            <div className="icon">
                                <span className="icon__span">
                                    <TrendingUpIcon fontSize="large" />
                                    <div>
                                        <span>Rating:</span> {(movie.popularity).toFixed(1)}                                
                                    </div>
                                </span>
                        
                                <span className="icon__span">
                                    <ScheduleIcon fontSize="large" />
                                    <div>
                                        <span>Release</span> { new Date(movie.releaseDate).getFullYear()}
                                    </div>                                
                                </span>
                            </div>                        
                        </div>
                    </div>
                    <div className="castandcrew">
                        <div className="cast">
                            <h3>Cast</h3>
                            { movie.cast.map((character, index) =>(
                                <Link to={`/person?id=${character.ref}`}
                                key={index} className="charactercontainer">
                                    <img src={
                                        character.image ? character.image : avatarUrl
                                    } 
                                    alt={character.name} />
                                    <div>
                                        <h5>{character.characterName}</h5>
                                        <span>{character.name}</span>
                                    </div>
                                </Link>
                            )) }
                        </div>
                        <div className="crew">
                            <h3>Crew</h3>
                            { movie.crew.map((character, index) =>(
                                <Link to={`/person?id=${character.ref}`}
                                    key={index} className="charactercontainer">
                                    <img src={
                                        character.image ? character.image : avatarUrl} 
                                    alt={character.name} />
                                    <div>
                                        <h5>{character.job}</h5>
                                        <span>{character.name}</span>
                                        <small><div></div>{character.department}</small>
                                    </div>
                                </Link>
                            )) }
                        </div>
                    </div>
                </>
                )                                
                
            }
            
        </MovieContainer>
    )
}

export default MoviePage
