import { SET_DARK_THEME, SET_LIGHT_THEME } from "../constants/globalConstants";

export const toggleTheme = (state = {}, action) =>{
    switch(action.type){
        case SET_LIGHT_THEME:
            return {
                theme: action.payload,
                "light": true
            }
        case SET_DARK_THEME:
            return {
                theme: action.payload,
                "light": false
            }
        default: 
            return state
    }
}