import { SET_DARK_THEME, SET_LIGHT_THEME } from "../constants/globalConstants"
import {theme} from "../../styles/definition"

export const switchToLightTheme = () =>(dispatch) =>{
    dispatch({
        type: SET_LIGHT_THEME,
        payload: theme.light
    })    
    localStorage.setItem('theme', JSON.stringify(theme.light))
    localStorage.setItem('light', JSON.stringify(true))
}

export const switchToDarkTheme = () =>(dispatch) =>{
    dispatch({
        type: SET_DARK_THEME,
        payload: theme.dark
    })    
    localStorage.setItem('theme', JSON.stringify(theme.dark))
    localStorage.setItem('light', JSON.stringify(false))
}