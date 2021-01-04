import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux"
import {colors} from "../styles/definition"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    color: 'black !important' ,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({open, setOpen}) {
  const history = useHistory()
  const classes = useStyles();  
  const [value, setValue] = useState('female');
  

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue);
    const [order, type] = newValue.split(" ")
    history.push(`?order=${order}&type=${type}`)
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const {light} = useSelector(state => state.toggleTheme)

  return (
    <div>
      
      <Modal        
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}        
      >
        <Fade in={open} style={{backgroundColor: light ? colors.lighter : colors.darkBlue}}>
          <div className={classes.paper}>
            <h2>
              Sort
            </h2>
            <p id="transition-modal-description">
            <FormControl component="fieldset">                
                <RadioGroup aria-label="sort" name="sort" value={value} onChange={handleChange}>
                    <FormControlLabel                        
                     value="popularity desc" control={<Radio />} label="Most Popular" />
                    <FormControlLabel value="popularity asc" control={<Radio />} label="Least Popular" />
                    <FormControlLabel value="releaseDate desc" control={<Radio />} label="Recently Released" />
                    <FormControlLabel value="releaseDate asc" control={<Radio />} label="Old Movies" />                                        
                </RadioGroup>
            </FormControl>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
