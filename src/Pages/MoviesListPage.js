import React, {useState, useEffect} from 'react'
import {fetchAllMovies, getMostPopular, sortMoviesBy} from "../redux/actions/movieActions"
import {useDispatch, useSelector} from "react-redux"
import Loader from "../components/BackdropLoader"
import {MovieListContainer} from "../styles/MovieStyles.js"
import SortIcon from '@material-ui/icons/Sort';
import SortModal from "../components/Modal"
import {useLocation, Link} from "react-router-dom"
import queryString from "query-string"
import {MOVIES_FETCH_RESET} from "../redux/constants/movieConstants"

const MoviesListPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()    
    const [openSort, setOpenSort] = useState(false)    
        
    useEffect(()=>{
        dispatch(getMostPopular())
        const {order, type} = queryString.parse(location.search)
        
        if(order && type){         
            dispatch({ type: MOVIES_FETCH_RESET })
            dispatch(sortMoviesBy(order, type))
        }else{            
            dispatch(fetchAllMovies())    
        }
        
    }, [dispatch, location.search])
    
    const {loading: popularLoading, 
            error: popularError, 
            movies: popularMovies
    } = useSelector(state => state.getMostPopularReducer)
    
    const { loading: moviesLoading, error: moviesError, movies
        } = useSelector(state => state.fetchAllMoviesReducer)
        
    const { loading: sortLoading, error: sortError, movies: sortMovies
    } = useSelector(state => state.sortMoviesByReducer)
    
    return (
        <MovieListContainer>
            
                <div className="mostpopular">     
                    {
                        popularLoading ? 
                        <Loader />                
                        : popularError ? popularError :               
                        popularMovies && popularMovies.map(movie => (
                            <Link to={`/movie?id=${movie._id}`} 
                                className="popular" key={movie._id} 
                                style={{backgroundImage: `url(${movie.poster})`}}>  
                                <div className="content">
                                    <h2>{movie.title}</h2>
                                    <p>{movie.overview.text.substring(0, 50)}&#8230;</p>
                                </div>                                
                            </Link>
                        ))
                    }
                </div>    
                <div className="moviespanel">
                    <div className="top">
                        <h2>All Movies</h2>
                        <SortIcon onClick={()=> setOpenSort(true)} />
                    </div>
                    <div className="movieslist">
                        {
                            moviesLoading ? <Loader />
                            : moviesError ? moviesError
                            : movies && movies.map(movie =>(
                                    <Link to={`/movie?id=${movie._id}`} key={movie._id}>
                                        <img className="movie" src={movie.poster} alt={movie.title} />
                                    </Link>
                            ))
                        }
                        {
                            (
                              sortLoading ? !movies && <Loader />
                                : sortError ? sortError
                                : 
                                sortMovies && sortMovies.map(movie =>(
                                    <Link to={`/movie?id=${movie._id}`} key={movie._id}>
                                        <img className="movie" src={movie.poster} alt={movie.title} />
                                    </Link>
                                ))
                            )
                        }
                    </div>
                </div>      
                    <SortModal 
                        open={openSort}
                        setOpen={setOpenSort}
                    />              
        </MovieListContainer>
    )
}

export default MoviesListPage
