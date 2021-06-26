//dependencies
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
//components

import Checkbox2 from '../checkbox/index.js';
import SideBar from '../sideBar/index.js';
import TextBox from '../textBox/index.js';
import './index.css'

function Surveys(props) {

    const [choiceName, setChoiceName] = useState("Create");
    const [value, setValue] = React.useState(2);
    const [checkboxQuestions, setCheckboxQuestions] = React.useState([{ name: "checkbox1" }, { name: "checkbox2" }, { name: "checkbox3" }, { name: "checkbox4" }]);
    const [dropdownQuestions, setDropdownQuestions] = React.useState([{ name: "dropdownbox1" }, { name: "dropdownbox2" }, { name: "dropdownbox3" }, { name: "dropdownbox4" }]);
    //get surveys from local storage
    const [surveys, setSurveys] = React.useState([]);

    useEffect(() => {

    }, [])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        console.log(event.target.innerText)
    };

    const checkSurveyMode = (event) => {
        let choice;
        switch (event.target.firstChild.nodeValue) {
            case "Surveys":
                choice = "Surveys";
                break;
            case "Create":
                choice = "Create";
                break;
        }
        setChoiceName(choice);
    }



    const checkMode = () => {
        console.log(value)
        if (value === 0) {
            return (
                <>
                    <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                        <TextField id="outlined-basic" label="Question" variant="outlined" style={{ width: "60%" }} /><br></br>
                    </div>
                    {checkboxQuestions.length ? (
                        checkboxQuestions.map((box) => (
                            <TextBox></TextBox>
                        ))
                    ) : (<></>)}
                    {/* add */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <AddCircleIcon></AddCircleIcon>
                    </div>
                </>
            )
        } else if (value === 2) {
            return (
                <>
                    <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                        <TextField id="outlined-basic" label="Question" variant="outlined" style={{ width: "60%" }} /><br></br>
                    </div>
                    {dropdownQuestions.length ? (
                        dropdownQuestions.map((box) => (
                            <TextBox name={box.name}></TextBox>
                        ))
                    ) : (<></>)}
                     <div style={{ display: "flex", justifyContent: "center" }}>
                        <AddCircleIcon></AddCircleIcon>
                    </div>
                </>
            )
        } else {
            return (
                <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <TextField id="outlined-basic" label="Question" variant="outlined" style={{ width: "60%" }} /><br></br>
                </div>
            )
        }
    }







    return (
        <>
            <div style={{ width: "100%", height: "6vh", color: "white", backgroundColor: "black" }}>
                <img style={{ height: "5vh", marginTop: "5px" }} src="https://sotellus.vercel.app/static/media/soTellUsSiteLogo.731a48c2.png"></img>
                <div style={{ float: "right", marginRight: "20px", marginTop: "5px" }}>
                    <AccountCircleIcon></AccountCircleIcon>
                </div>
            </div>
            <Grid container spacing={0}>
                <SideBar checkSurveyMode={checkSurveyMode}></SideBar>
                <Grid item xs={12} md={10} p={10} style={{ backgroundColor: "rgb(218, 216, 216)", minHeight: "94vh" }}>
                    <Breadcrumbs aria-label="breadcrumb" mb={5}>
                        <Link color="inherit" href="/">
                            Dashboard
                        </Link>
                        <Typography color="textPrimary">Surveys</Typography>
                    </Breadcrumbs>
                    <div style={{ padding: "5px" }}>
                        {(choiceName === "Create") ?
                            (<>

                                {/* tabs*/}

                                <Paper elevation={3} style={{ marginBottom: "10px" }}>
                                    <Paper style={{ display: "flex", justifyContent: "center" }}>
                                        <Tabs
                                            value={value}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            onChange={handleChange}
                                            aria-label="disabled tabs example"
                                        >
                                            <Tab label="Checkbox" />
                                            <Tab label="Text" />
                                            <Tab label="Dropdown" />
                                        </Tabs>
                                    </Paper>
                                </Paper>

                                {/* title */}

                                <Paper elevation={3} style={{ display: "flex", justifyContent: "center", marginBottom: "10px", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                                        <TextField id="standard-basic" label="Title" style={{ width: "90%", textAlign: "center" }} /><br></br>
                                    </div>
                                </Paper>


                                {/* question builder */}

                                <Paper elevation={3} style={{ marginBottom: "10px" }}>
                                    {checkMode()}
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Button variant="contained" color="secondary">
                                            Build
                                        </Button>
                                    </div>
                                </Paper>

                                {/* survey */}

                                <Paper elevation={3} style={{ display: "flex", justifyContent: "center" }}>
                                    <Checkbox2></Checkbox2>
                                    <Checkbox2></Checkbox2>
                                    <div id="1">
                                        edit
                                    </div>
                                </Paper>
                            </>)
                            : (<Paper elevation={3}>
                                Surveys
                            </Paper>)}
                    </div>
                </Grid>
            </Grid>
            {/* footer */}
            <div class="footer" style={{ justifyContent: "center" }}>
                <HomeIcon fontSize="medium" style={{ color: "grey" }}></HomeIcon>
                <StarIcon fontSize="medium" style={{ color: "grey" }}></StarIcon>
                <LocalOfferIcon fontSize="medium" style={{ color: "grey" }}></LocalOfferIcon>
            </div>
        </>
    );
}



export default Surveys;