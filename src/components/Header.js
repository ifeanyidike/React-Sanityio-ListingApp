import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MovieIcon from '@material-ui/icons/Movie';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import Switch from "../components/Switch"

const MenuContent = ({setOpen}) => {        
    
    return(
        <>
            <Link to="/" 
                onClick={() => setOpen(false)}> 
                <MovieIcon fontSize="large" />  Movies
            </Link>
            <Link to="/persons"
                onClick={() => setOpen(false)}> 
                <RecentActorsIcon fontSize="large" /> Stars
            </Link>
            
            {/* <Link onClick={() => setOpen(false)}> <PersonAddIcon /> Producers</Link>
            <Link onClick={() => setOpen(false)}> <AirlineSeatReclineExtraIcon /> Directors</Link>
            <Link onClick={() => setOpen(false)}> <CameraAltIcon /> Camera</Link> */}
            
        </>
    )
}
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const {theme} = useSelector(state => state.toggleTheme)
    
    return (
        <>
            <div className="header">
            
                <Link to="/" onClick={() => setOpenMenu(false)}>
                    <label>MovieList</label>
                </Link>
                
                {
                    theme && (
                        <span>
                            <Switch />
                        </span>
                    )
                }
            
                <div>
                    <MenuIcon 
                        style={{display: openMenu ? 'none' : 'block'}}
                        onClick={() => setOpenMenu(true)} className="hamburger"                          
                    />
                    <CloseIcon 
                        style={{display: openMenu ? 'block' : 'none'}}
                        onClick={() => setOpenMenu(false)} className="hamburger"                          
                    />
                </div>
            </div>
            <div style={{marginRight: openMenu ? '0' : '-100%'}}
                className="mobileHeader">
                <div className="menuitems">
                    <MenuContent setOpen={setOpenMenu} />
                </div>
            </div>
        </>
    )
}

export default Header
