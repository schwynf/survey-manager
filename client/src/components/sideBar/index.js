//dependencies
import React, { useState, useEffect } from 'react';
//components
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
//css
import './index.css'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SideBar(props) {

    useEffect(() => {
    }, [])

    return (
        <>
            <Grid id="side-bar" item xs={0} md={2}>
                <Grid container spacing={0}>
                    <Grid id="inner-side-bar" item xs={4}>
                        <div style={{ justifyContent: "center", display: "flex" }}>
                            <Tooltip title="Home" placement="right">
                                <HomeIcon fontSize="medium" style={{ color: "grey" }}></HomeIcon>
                            </Tooltip>
                        </div>
                        <div className='side-icons'>
                            <StarIcon fontSize="medium" style={{ color: "grey" }}></StarIcon>
                        </div>
                        <div className='side-icons'>
                            <LocalOfferIcon fontSize="medium" style={{ color: "grey" }}></LocalOfferIcon>
                        </div>
                        <div className='side-icons'>
                            <ChatIcon fontSize="medium" style={{ color: "grey" }}></ChatIcon>
                        </div>
                        <div className='side-icons'>
                            <FavoriteIcon fontSize="medium" style={{ color: "grey" }}></FavoriteIcon>
                        </div>
                        <div className='side-icons'>
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