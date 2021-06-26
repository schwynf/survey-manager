import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './index.css'
const useStyles = makeStyles(() => ({
    centerAdornment: {
      marginLeft: "50%" // or your relevant measure
    },
    centerText: {
      textAlign: "center"            
    }
  }));
export default function TextBox(props) {

    const style = useStyles();
    const [name, setName] = useState("")
    useEffect(() => {
       
    }, [])

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                {props.children}
                <TextField id="outlined-basic" style={{ width: "60%", textAlign: "center" }} name={props.name} value={props.value} onChange={props.handleChangeTextbox} /><br></br>
            </div>
        </>
    );
}