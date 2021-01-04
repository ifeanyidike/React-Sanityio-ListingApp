import { 
    PERSONS_COUNT,    
    PERSONS_FETCH_FAIL, 
    PERSONS_FETCH_REQUEST, 
    PERSONS_FETCH_SUCCESS, 
    PERSON_FETCH_FAIL, 
    PERSON_FETCH_REQUEST,
    PERSON_FETCH_SUCCESS
} from "../constants/personConstants";


const fetchAllPersonsReducer = (state = {}, action) =>{    
    switch(action.type){
        case PERSONS_FETCH_REQUEST:
            return{
                loading: true
            }
        
        case PERSONS_FETCH_SUCCESS:
            return{
                loading: false,
                persons: action.payload
            }
        
        case PERSONS_FETCH_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }    
}


const countPersonsReducer = (state = {}, action) =>{    
    switch(action.type){
               
        case PERSONS_COUNT:
            return{
                loading: false,
                count: action.payload
            }
        
        default:
            return state
    }    
}


const fetchPersonByIdReducer = (state = {}, action) =>{    
    switch(action.type){
        case PERSON_FETCH_REQUEST:
            return{
                loading: true
            }
        
        case PERSON_FETCH_SUCCESS:
            return{
                loading: false,
                person: action.payload
            }
        
        case PERSON_FETCH_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }    
}

export {
    fetchAllPersonsReducer,
    fetchPersonByIdReducer,
    countPersonsReducer
}
