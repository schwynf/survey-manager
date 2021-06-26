//dependencies
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
//components
import './index.css'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SideBar(props) {

    useEffect(() => {

    }, [])

    return (
        <>
            <Grid id="side-bar" item xs={0} md={2} style={{backgroundColor: "white", height: "92vh", borderRight: "4px solid rgb(247, 245, 245)" }}>
                    <Grid container spacing={0}>
                        <Grid item xs={4} style={{ height: "92vh", borderRight: "2px solid rgb(247, 245, 245)", height: "100%" }}>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <Tooltip title="Home" placement="right">
                                    <HomeIcon fontSize="medium" style={{ color: "grey" }}></HomeIcon>
                                </Tooltip>
                            </div>
                            <div style={{ justifyContent: "center", display: "flex", marginTop: "25%" }}>
                                <StarIcon fontSize="medium" style={{ color: "grey" }}></StarIcon>
                            </div>
                            <div style={{ justifyContent: "center", display: "flex", marginTop: "25%" }}>
                                <LocalOfferIcon fontSize="medium" style={{ color: "grey" }}></LocalOfferIcon>
                            </div>
                            <div style={{ justifyContent: "center", display: "flex", marginTop: "25%" }}>
                                <ChatIcon fontSize="medium" style={{ color: "grey" }}></ChatIcon>
                            </div>
                            <div style={{ justifyContent: "center", display: "flex", marginTop: "25%" }}>
                                <FavoriteIcon fontSize="medium" style={{ color: "grey" }}></FavoriteIcon>
                            </div>
                            <div style={{ justifyContent: "center", display: "flex", marginTop: "25%" }}>
                                <SettingsIcon fontSize="medium" style={{ color: "grey" }}></SettingsIcon>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <Divider />
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem button id="surveys" onClick={props.checkSurveyMode}>
                                    <ListItemText className="tabs" primary="Overview" />
                                </ListItem>
                                <ListItemLink id="create" onClick={props.checkSurveyMode}>
                                    <ListItemText className="tabs" primary="Create" />
                                </ListItemLink>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
        </>
    );
}



export default SideBar;