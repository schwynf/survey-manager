//dependencies
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
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
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import CreateIcon from '@material-ui/icons/Create';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
//components
import ScrollArrow from '../scrollArrow/index.js'
import Checkbox2 from '../checkbox/index.js';
import Dropdown from '../dropdown/index.js';
import Header from '../header/index.js';
import Footer from '../footer/index.js';
import SideBar from '../sideBar/index.js';
import TextBox from '../textBox/index.js';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './index.css'
import { Remove } from '@material-ui/icons';
//images
import EssayImage from '../../images/essay.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function Surveys(props) {

    const classes = useStyles();

    const [choiceName, setChoiceName] = useState("Overview");
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [surveyIndex, setSurveyIndex] = useState(-1);
    const [questionIndex, setQuestionIndex] = useState(-1);
    const [value, setValue] = React.useState(1);
    const [checkboxQuestions, setCheckboxQuestions] = React.useState({ checkbox1: "", checkbox2: "", checkbox3: "", checkbox4: "" });
    const [dropdownQuestions, setDropdownQuestions] = React.useState({ dropdownbox1: "", dropdownbox2: "", dropdownbox3: "" });
    const [textboxQuestions, setTextboxQuestions] = React.useState({ textbox1: "" });
    const [surveys, setSurveys] = React.useState([]);
    const history = useHistory();

    const checkboxNames = ["checkbox1", "checkbox2", "checkbox3", "checkbox4"];
    const dropdownNames = ["dropdownbox1", "dropdownbox2", "dropdownbox3"];
    const textName = "textbox1";


    useEffect(() => {
        if (!props.user) {
            history.push('/login')
        }
        console.log(props)
    }, [props.user, props.questions])

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
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

    const handleChangeCheckbox = (event) => {
        setCheckboxQuestions({ ...checkboxQuestions, [event.target.name]: event.target.value })
    }
    const handleChangeTextbox = (event) => {
        setTextboxQuestions({ textbox1: event.target.value })
    }
    const handleChangeDropdown = (event) => {
        setDropdownQuestions({ ...dropdownQuestions, [event.target.name]: event.target.value })
    }
    const editQuestion = (event) => {
        // console.log(event.target.id);
        if (!event.target.id) {
            return
        }
        let choices = props.questions[parseInt(event.target.id) - 1].choices;
        let type = props.questions[parseInt(event.target.id) - 1].type;
        let query = props.questions[parseInt(event.target.id) - 1].question;
        console.log(choices)
        if (type === "checkbox") {
            console.log("boo")
            setValue(0);
            setCheckboxQuestions({ checkbox1: choices[0], checkbox2: choices[1], checkbox3: choices[2], checkbox4: choices[3] });
            setQuestionIndex(parseInt(event.target.id) - 1);
            setQuestion(query);
        } else if (type === "dropdown") {
            setValue(2);
            setDropdownQuestions({ dropdownbox1: choices[0], dropdownbox2: choices[1], dropdownbox3: choices[2] });
            setQuestionIndex(parseInt(event.target.id) - 1);
            setQuestion(query);
        } else {
            setValue(1);
            setQuestionIndex(parseInt(event.target.id) - 1);
            setQuestion(query);
        }

    }
    const deleteQuestion = (event) => {
        console.log(event.target.id);
        if (!event.target.id) {
            return
        }
        let data = props.questions.filter((data, index) => {
            return index !== parseInt(event.target.id - 1)
        })
        console.log(data)
        props.dispatch({ type: 'ADD_QUESTION', payload: data })
    }

    const handleBuild = () => {
        console.log(value)
        let questionObject;
        let newTempQuestions;
        if (value === 0) {
            questionObject = {
                type: "checkbox",
                question: question,
                choices: [checkboxQuestions.checkbox1, checkboxQuestions.checkbox2, checkboxQuestions.checkbox3, checkboxQuestions.checkbox4]
            };
        } else if (value === 2) {
            questionObject = {
                type: "dropdown",
                question: question,
                choices: [dropdownQuestions.dropdownbox1, dropdownQuestions.dropdownbox2, dropdownQuestions.dropdownbox3]
            };
        } else {
            questionObject = {
                type: "textbox",
                question: question
            };
        }
        if (questionIndex === -1) {
            newTempQuestions = [...props.questions, questionObject];
            props.dispatch({ type: 'ADD_QUESTION', payload: newTempQuestions });
        } else {
            newTempQuestions = [...props.questions]
            newTempQuestions[questionIndex] = questionObject;
            props.dispatch({ type: 'EDIT_QUESTION', payload: newTempQuestions });
            setQuestionIndex(-1);
        }



    }
    const handleSave = () => {
        let user;
        let survey;
        if (props.questions.length && surveyIndex === -1) {
            user = JSON.parse(localStorage.getItem('user'));
            survey = { title, questions: props.questions }
            user.surveys.push(survey)
            localStorage.setItem('user', JSON.stringify(user));
            props.dispatch({ type: 'ADD_USER', payload: user });
            props.dispatch({ type: 'DEFAULT_QUESTIONS' });
            setCheckboxQuestions({ checkbox1: "", checkbox2: "", checkbox3: "", checkbox4: "" });
            setDropdownQuestions({ dropdownbox1: "", dropdownbox2: "", dropdownbox3: "" });
            setTextboxQuestions({ textbox1: "" });
            setTitle("");
            setQuestion("");
            setSurveyIndex(-1);
        }
        if (props.questions.length && surveyIndex > -1) {
            user = JSON.parse(localStorage.getItem('user'));
            survey = { title, questions: props.questions };
            user.surveys[surveyIndex] = survey;
        }
        localStorage.setItem('user', JSON.stringify(user));
        props.dispatch({ type: 'ADD_USER', payload: user });
        props.dispatch({ type: 'DEFAULT_QUESTIONS' });
        setCheckboxQuestions({ checkbox1: "", checkbox2: "", checkbox3: "", checkbox4: "" });
        setDropdownQuestions({ dropdownbox1: "", dropdownbox2: "", dropdownbox3: "" });
        setTextboxQuestions({ textbox1: "" });
        setTitle("");
        setQuestion("");
        setSurveyIndex(-1);
    }

    const handleClear = () => {
        setCheckboxQuestions({ checkbox1: "", checkbox2: "", checkbox3: "", checkbox4: "" });
        setDropdownQuestions({ dropdownbox1: "", dropdownbox2: "", dropdownbox3: "" });
        setTextboxQuestions({ textbox1: "" });
        setTitle("");
        setQuestion("");
        setQuestionIndex(-1);
        props.dispatch({ type: 'DEFAULT_QUESTIONS' });
    }
    const mapSurvey = (data, index) => {
        if (data.type == "checkbox") {
            return <Checkbox2 title={data.question} deleteQuestion={deleteQuestion} editQuestion={editQuestion} index={index} choice={data.choices}></Checkbox2>
        }
        if (data.type == "dropdown") {
            return <Dropdown title={data.question} index={index} deleteQuestion={deleteQuestion} editQuestion={editQuestion} choice={data.choices}></Dropdown>
        }
        if (data.type == "textbox") {
            return <><h3>{index + ") " + data.question}</h3><div style={{ justifyContent: "center", textAlign: "center" }}><TextField onClick={(event) => { console.log("edit") }} id="outlined-basic" style={{ marginLeft: "40px", width: "50%", textAlign: "center" }} name="textfield" /><div></div><CreateIcon fontSize="large" onClick={editQuestion} id={index} style={{ marinLeft: "40px", color: "green", float: "center", clear: "both" }}>s</CreateIcon><DeleteForeverIcon style={{ fontSize: "35px" }} id={index} onClick={deleteQuestion}></DeleteForeverIcon></div></>
        }
    }

    const editSurvey = (event) => {
        if (!event.target.id) {
            return
        }

        let questions = props.user.surveys[parseInt(event.target.id)].questions;
        console.log(questions)
        setQuestionIndex(-1)
        setSurveyIndex(parseInt(event.target.id))
        setChoiceName("Create");
        setTitle(props.user.surveys[parseInt(event.target.id)].title)
        props.dispatch({ type: 'ADD_QUESTION', payload: questions });
    }
    const deleteSurvey = (event) => {
        if (!event.target.id) {
            return
        }
        console.log(event.target.id)
        let index = parseInt(event.target.id);
        let user = JSON.parse(localStorage.getItem('user'));
        user.surveys.splice(parseInt(index), ++index);
        localStorage.setItem('user', JSON.stringify(user));
        props.dispatch({ type: 'ADD_USER', payload: user })

    }
    const mapSurveys = () => {
        let data = [];
        let nextIndex;
        if (props.user && props.user.surveys.length) {
            let surveyLength = props.user.surveys.length - 1;
            props.user.surveys.forEach((survey, index) => {
                nextIndex = index + 1;
                let surveyTitleShort = survey.title.slice(0, 10) + "...";
                data.push(<>
                    <Grid item xs={6} sm={3} className="enlarge">
                        <Paper className={classes.paper} id={index} style={{ backgroundColor: "white", margin: "auto", width: "130px", minHeight: "200px" }}>
                            <div>{surveyTitleShort}</div>
                            <img onClick={(event) => { window.location.href = "/view/" + index }} id={index} src={EssayImage} style={{ marginTop: 10, height: "75%", width: "100%" }}></img>
                            <div style={{ display: "flex" }}>
                                <CreateIcon onClick={editSurvey} id={index} style={{ margin: "auto", color: "green" }}></CreateIcon>
                                <DeleteForeverIcon id={index} onClick={deleteSurvey} style={{ margin: "auto" }} ></DeleteForeverIcon>
                            </div>
                        </Paper>
                    </Grid>
                </>)
            })
        } else {
            data = <h1 style={{ display: "flex", justifyContent: "center" }}>No Surveys To Display</h1>
        }
        return data;
    }
    const checkMode = () => {
        if (value === 0) {
            return (
                <>
                    <TextBox name={checkboxNames[0]} value={checkboxQuestions.checkbox1} handleChangeTextbox={handleChangeCheckbox}>
                        <CheckBoxOutlineBlankIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></CheckBoxOutlineBlankIcon>
                    </TextBox>
                    <TextBox name={checkboxNames[1]} value={checkboxQuestions.checkbox2} handleChangeTextbox={handleChangeCheckbox}>
                        <CheckBoxOutlineBlankIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></CheckBoxOutlineBlankIcon>
                    </TextBox>
                    <TextBox name={checkboxNames[2]} value={checkboxQuestions.checkbox3} handleChangeTextbox={handleChangeCheckbox}>
                        <CheckBoxOutlineBlankIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></CheckBoxOutlineBlankIcon>
                    </TextBox>
                    <TextBox name={checkboxNames[3]} value={checkboxQuestions.checkbox4} handleChangeTextbox={handleChangeCheckbox}>
                        <CheckBoxOutlineBlankIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></CheckBoxOutlineBlankIcon>
                    </TextBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <RemoveIcon></RemoveIcon>
                        <AddIcon></AddIcon>
                    </div>
                </>
            )
        }
        if (value === 2) {
            return (
                <>
                    <TextBox name={dropdownNames[0]} value={dropdownQuestions.dropdownbox1} handleChangeTextbox={handleChangeDropdown}>
                        <ArrowDropDownCircleIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></ArrowDropDownCircleIcon>
                    </TextBox>
                    <TextBox name={dropdownNames[1]} value={dropdownQuestions.dropdownbox2} handleChangeTextbox={handleChangeDropdown}>
                        <ArrowDropDownCircleIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></ArrowDropDownCircleIcon>
                    </TextBox>
                    <TextBox name={dropdownNames[2]} value={dropdownQuestions.dropdownbox3} handleChangeTextbox={handleChangeDropdown}>
                        <ArrowDropDownCircleIcon className="checkbox-icon" style={{ marginTop: "8px", marginRight: "10px" }}></ArrowDropDownCircleIcon>
                    </TextBox>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <RemoveIcon></RemoveIcon>
                        <AddIcon></AddIcon>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <Header></Header>
            <div id="top-nav" style={{ backgroundColor: "yellow", justifyContent: "center", textAlign: "center" }}>
                <div onClick={() => { setChoiceName("Create") }} style={{ backgroundColor: "yellow", margin: "auto", textAlign: "center" }}>Create</div>
                <div style={{ margin: "auto", width: "150px", height: "20px", borderLeft: "2px solid black", borderRight: "2px solid black", textAlign: "center" }}>Home</div>
                <div onClick={() => { setChoiceName("Surveys") }} style={{ margin: "auto" }}>View</div>
            </div>

            <Grid container spacing={0}>
                <SideBar checkSurveyMode={checkSurveyMode}></SideBar>
                {/* ,  maxHeight: "94vh", overflowY: "scroll" */}
                <Grid id="grid-box-content" item xs={12} md={10} p={10} style={{ backgroundColor: "rgb(218, 216, 216)", minHeight: "94vh" }}>
                    <Breadcrumbs aria-label="breadcrumb" mb={5}>
                        <Link color="inherit" href="/">
                            Dashboard
                        </Link>
                        <Typography color="textPrimary">Surveys</Typography>
                    </Breadcrumbs>
                    <div className="survey-div">
                        {(choiceName === "Create") ?
                            (<>
                                {/* tabs*/}
                                <div style={{ width: "90%", diplay: "flex", justifyContent: "center", margin: "auto" }}>
                                    <Paper className="paper-tabs">
                                        <Tabs
                                            value={value}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            onChange={handleChange}
                                            aria-label="disabled tabs example"
                                        >
                                            <Tab onClick={() => { setQuestionIndex(-1) }} label="Checkbox" />
                                            <Tab onClick={() => { setQuestionIndex(-1) }} label="Text" />
                                            <Tab onClick={() => { setQuestionIndex(-1) }} label="Dropdown" />
                                        </Tabs>
                                    </Paper>
                                </div>
                                {/* question builder */}
                                <Paper elevation={3} style={{ marginBottom: "10px" }}>
                                    <div className="paper-title">
                                        <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                                            <TextField id="standard-basic" value={title} onChange={(event) => { setTitle(event.target.value) }} label="Title" className="text-title" /><br></br>
                                        </div>
                                    </div>
                                    <div className="paper-title">
                                        <TextField style={{ width: "50%", textAlign: "center" }} id="standard-basic" value={question} onChange={(event) => { setQuestion(event.target.value) }} label="Question" /><br></br>
                                    </div>
                                    {checkMode()}
                                    <div className="button-build">
                                        <Button onClick={handleBuild} variant="contained" color="secondary">
                                            Build
                                        </Button>
                                        <Button onClick={handleClear} variant="contained" color="secondary">
                                            Clear
                                        </Button>
                                    </div>
                                    <div className="button-build">
                                        <button onClick={handleSave}>save</button>
                                    </div>
                                </Paper>
                                <div style={{ paddingBottom: "20px", justifyContent: "center", textAlign: "center", marginBottom: "50px" }}>
                                    <h1 style={{ marginBottom: "50px" }}>{title}</h1>

                                    {props.questions ? (props.questions.map((data, index) => (
                                        mapSurvey(data, index + 1)
                                    ))) : (<div>no questions</div>)}
                                </div>
                            </>) : (<div style={{ marginBottom: "100px" }}><Grid container spacing={2}>{mapSurveys()}</Grid></div>)}
                    </div>
                </Grid>
            </Grid>
            {/* footer */}
            <Footer></Footer>
            <ScrollArrow></ScrollArrow>
        </>
    );
}



const mapStateToProps = (state) => {
    return { user: state.user, questions: state.questions }
}

export default connect(mapStateToProps)(Surveys);