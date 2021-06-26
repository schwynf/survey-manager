//dependencies
import React, { useState, useEffect } from 'react';
//components
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//css
import './index.css'

function Footer(props) {
    useEffect(() => {
    }, [])
    return (
        <>
            <div className="footer">
                <HomeIcon fontSize="medium" style={{ color: "grey", margin:"auto" }}></HomeIcon>
                <StarIcon fontSize="medium" style={{ color: "grey", margin:"auto" }}></StarIcon>
                <LocalOfferIcon fontSize="medium" style={{ color: "grey", margin:"auto" }}></LocalOfferIcon>
                <MoreHorizIcon fontSize="medium" style={{ color: "grey", margin:"auto" }}></MoreHorizIcon>
            </div>
        </>
    );
}

export default Footer;