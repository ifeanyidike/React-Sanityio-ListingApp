import React from 'react';
import Switch from '@material-ui/core/Switch';
import {useDispatch, useSelector} from "react-redux"
import {switchToLightTheme, switchToDarkTheme} from "../redux/actions/globalActions"

export default function Switches() {  
  const dispatch = useDispatch()
  const {light} = useSelector(state => state.toggleTheme)
    
  const handleChange = () =>{   
    if(!light){
      dispatch(switchToLightTheme())        
    }else{
      dispatch(switchToDarkTheme())        
    }     
  
  }
  
  return (
    <div>
      <Switch
        checked={light}
        onChange={handleChange}
        name="checked"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      
    </div>
  );
}

