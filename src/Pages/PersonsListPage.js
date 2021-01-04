import React, {useState, useEffect} from 'react'
import {fetchAllPersons, 
        countPersons,
    } from "../redux/actions/personActions"
import {fetchMoviesByRef} from "../redux/actions/movieActions"
import {useSelector, useDispatch} from "react-redux"
import {PersonsListContainer} from "../styles/PersonStyle"
import Loader from "../components/BackdropLoader"
import {Link} from "react-router-dom"
import Paginate from "../components/Paginate"
import {avatarUrl} from "../styles/definition"
    
const PersonsListPage = () => {
    const dispatch  = useDispatch()    
    const [page, setPage]   = useState(1)           
    
    const {count} = useSelector(state => state.countPersonsReducer)
        
    useEffect(()=>{
        dispatch(fetchMoviesByRef("crewMembers", 'person_abbey-lee'))
        dispatch(countPersons())
    }, [dispatch])
    
    const perPage = 20
    const lastPage = count && Math.ceil(count.length / perPage)
    const start = page === 1 ? 0 : (page < lastPage) ? (page - 1) * perPage : (lastPage - 1) * perPage
    const end = start + Number(perPage) - 1  
      
    useEffect(()=>{
        dispatch(fetchAllPersons(start, end))           
    }, [dispatch, start, end])
        
    const {loading, error, persons} =  useSelector(state => state.fetchAllPersonsReducer)
     
    return (
        <PersonsListContainer>
            <div className="top">
                <Paginate 
                    page={page} 
                    setPage={setPage}
                    lastPage = {lastPage}
                />
            </div>
            <div className="personslist">
                {
                    loading ? <Loader />
                    : error ? error
                    : persons && persons.map(person =>(
                        <Link className="person" to={`/person?id=${person._id}`} key={person._id}>
                                <img 
                                src={person.image ? person.image : avatarUrl} 
                                alt={person.name} />
                                <div className="content">
                                    {person.name}
                                </div>
                        </Link>
                    ))
                }

            </div>            
            
        </PersonsListContainer>
    )
}

export default PersonsListPage
