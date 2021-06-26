//dependencies
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//components
import TextField from '@material-ui/core/TextField';
//css
import './index.css'

export default function TextBox(props) {
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