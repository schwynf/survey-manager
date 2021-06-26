//dependency
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//components
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//css
import './index.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  useEffect(() => {
  }, [state])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const keys = Object.keys(state)

  return (
    <>
      <div className={classes.root}>

        {props.view ? (<><div style={{ display: "flex" }}><h3>{props.index}</h3><h3 style={{ color: "orange" }}>{"|   "}</h3><h3>{props.title}</h3></div></>)
          : (<><h3>{props.index + ") " + props.title}</h3></>)}
        <FormControl component="fieldset" className={classes.formControl} style={{ marginTop: 0 }}>
          <FormLabel component="legend"></FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox style={{ color: "orange" }}  checked={state[keys[0]]} onChange={handleChange} name={keys[0]} />}
              label={props.choice[0]}
            />
            <FormControlLabel
              control={<Checkbox style={{ color: "orange" }} checked={state[keys[1]]} onChange={handleChange} name={keys[1]} />}
              label={props.choice[1]}
            />
            <FormControlLabel
              control={<Checkbox style={{ color: "orange" }} checked={state[keys[2]]} onChange={handleChange} name={keys[2]} />}
              label={props.choice[2]}
            />
            <FormControlLabel
              control={<Checkbox style={{ color: "orange" }} checked={state[keys[3]]} onChange={handleChange} name={keys[3]} />}
              label={props.choice[3]}
            />
          </FormGroup>
        </FormControl>
      </div>
      {(props.view) ? (<></>) : (<>
        <CreateIcon className="hide" fontSize="large" id={props.index} onClick={props.editQuestion} style={{ color: "green" }}></CreateIcon>
        <DeleteForeverIcon className="hide" fontSize="large" id={props.index} onClick={props.deleteQuestion}></DeleteForeverIcon></>)}
    </>
  );
}