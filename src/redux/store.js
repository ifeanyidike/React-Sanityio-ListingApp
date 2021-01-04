import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {theme as initialTheme} from "../styles/definition"
import reducers from "./reducers"

const theme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : initialTheme.light;
  
const light = localStorage.getItem("light")
? JSON.parse(localStorage.getItem("light"))
: true;

const initialState = {
    toggleTheme: {light, theme}    
}

export default createStore(
    reducers,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)