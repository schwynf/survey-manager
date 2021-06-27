//dependencies
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//components
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Header from '../header/index';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../footer/index.js';
//css
import './index.css'

let user;

function Account(props) {
    const [email, setEmail] = useState('Email');

    useEffect(() => {
        if (props.user) {
            setEmail(props.user.email);
        } else {
            setEmail('');
        }
    }, [props.user])

    const handleEditName = (event) => {
        event.preventDefault();
        let user = JSON.parse(localStorage.getItem('user'));
        user.email = email;
        localStorage.setItem('user', JSON.stringify(user));
        props.dispatch({ type: "EDIT_USER", payload: user })
    }

    return (
        <>
            <Header></Header>
            <Grid container spacing={2} style={{ marginTop: "10vh" }}>
                <Grid item xs={2} md={4}>

                </Grid>
                <Grid item xs={8} md={4} style={{backgroundColor:"grey", borderBottom: "8px solid"}}>
                    <Paper style={{ height: "200px", width: "100%", paddingTop: "10px", paddingBottom: "40px"}}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h1>Account</h1>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <TextField onChange={(event) => { setEmail(event.target.value) }} id="outlined-basic" label="email" value={email} variant="outlined" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={handleEditName} style={{ marginTop: '10px' }} variant="contained">Save</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={2} md={4}>

                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Account);