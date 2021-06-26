//dependencies
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
//components
import Header from '../header/index.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Checkbox2 from '../checkbox/index.js';
import Dropdown from '../dropdown/index.js';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
//css
import './index.css'



function View(props) {
    const [title, setTitle] = useState("Survey")
    const [email, setEmail] = useState("test@gmail.com")

    useEffect(() => {
        if (props.user) {
            console.log(props.user.surveys[0].title)
            setTitle(props.user.surveys[props.match.params.id].title)
            setEmail(props.user.email)
        }
    }, [props.user])

    const mapSurvey = (data, index) => {
        if (data.type == "checkbox") {
            return <Checkbox2 view={true} title={data.question} ddeleteQuestion={()=>{console.log("")}} editQuestion={()=>{console.log("")}}  index={index} choice={data.choices}></Checkbox2>
        }
        if (data.type == "dropdown") {
            return <Dropdown view={true} title={data.question} index={index} deleteQuestion={()=>{console.log("")}} editQuestion={()=>{console.log("")}}  choice={data.choices}></Dropdown>
        }
        if (data.type == "textbox") {
            // return <><h3 style={{ paddingLeft: 25, marginBottom: 0, display: "inline-block", position: "relative"}} >{index}<span style={{lineHeight:"80%", display: "inline-block", color: "orange", height:40, marginRight:15}}>{"|"}</span>{data.question}</h3><br></br><TextField className="text-field" style={{marginLeft:"30px"}}></TextField><br></br></>
            return <><div style={{display:"flex"}}><h3>{index}</h3><h3 style={{color:"orange"}}>{"|   "}</h3><h3>{data.question}</h3></div><TextField className="text-field" label="text" style={{marginLeft:"30px"}}></TextField><br></br></>
        }
    }

    return (
        <>
            <div style={{ backgroundColor: "beige"}}>
                <div className="navbar">
                    <Container maxWidth="lg">
                        <div style={{ fontSize: 14, paddingTop: 10 }}>
                            {email}
                        </div>
                        <div style={{ paddingTop: 2 }}>
                            {title}
                        </div>
                    </Container>
                </div>
                <Container className="main" maxWidth="lg" style={{ marginTop: "6vh", paddingTop: 25, paddingLeft:30, minHeight:"94vh", backgroundColor: "white" }}>
                    {props.user ? (props.user.surveys[props.match.params.id].questions.map((data,index)=>(
                            mapSurvey(data, index + 1)
                    ))):(<></>)}
                </Container>
            </div>

        </>
    );
}

const mapStateToProps = (state) => {
    return { user: state.user, questions: state.questions }
}

export default connect(mapStateToProps)(View);