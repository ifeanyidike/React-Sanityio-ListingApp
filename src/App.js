import { GlobalStyle } from "./styles/globalStyles"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MoviesList from "./pages/MoviesListPage"
import PersonsList from "./pages/PersonsListPage"
import Movie from "./pages/MoviePage"
import Person from "./pages/PersonPage"
import {useSelector} from "react-redux"
import {ThemeProvider} from "styled-components"
  
function App() { 
  const {theme} = useSelector(state => state.toggleTheme)
  
  let Theme = theme ? theme : {}
  
  return (
    <ThemeProvider theme={Theme} >
      <Router>
        <GlobalStyle />
        <div className="contentwrap">
        <Header />
        <Switch>
            <Route path="/movie/">
              <Movie />
            </Route>
            <Route path="/person/">
              <Person />
            </Route>
            <Route path="/persons/">
              <PersonsList />
            </Route>
            <Route path="/" exact>
              <MoviesList />
            </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
