import sanityAPI from "../../sanitySetup"
import { 
    PERSONS_COUNT,
    PERSONS_FETCH_FAIL,
    PERSONS_FETCH_REQUEST, 
    PERSONS_FETCH_SUCCESS,
    PERSON_FETCH_FAIL,
    PERSON_FETCH_REQUEST,
    PERSON_FETCH_SUCCESS
 } from "../constants/personConstants"


 const countPersons = () => async(dispatch) =>{

        const data = await sanityAPI.fetch(`
            *[_type == 'person']{                
              "count": count(person)                
            } 
        `)
        
        dispatch({
            type: PERSONS_COUNT,
            payload: data
        })
            
}

 
const fetchAllPersons = (start, end) => async(dispatch) =>{
    try {
        dispatch({
            type: PERSONS_FETCH_REQUEST
        })
        
        const data = await sanityAPI.fetch(`
            *[_type == 'person']{                
                _id,                
                "image": image.asset->url,
                name,                             
            } [${start}..${end}]
        `)
        
        dispatch({
            type: PERSONS_FETCH_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: PERSONS_FETCH_FAIL,
            payload: error.message
        })
    }
}

const fetchPersonById = (id) => async(dispatch) =>{
    try {
        dispatch({
            type: PERSON_FETCH_REQUEST
        })
        
        const data = await sanityAPI.fetch(`
            *[_type == 'person' && _id == '${id}']{                
                _id,
                _createdAt,
                "image": image.asset->url,
                name                                
            }[0]
        `)
        
        dispatch({
            type: PERSON_FETCH_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: PERSON_FETCH_FAIL,
            payload: error.message
        })
    }
}

export {
    fetchAllPersons,
    fetchPersonById, 
    countPersons
}