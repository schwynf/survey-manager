//dependencies
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
//components
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//css
import './index.css'



function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = ()=>{
        localStorage.removeItem("login");
        props.dispatch({type:'REMOVE_USER', payload: null});
        history.push('/login');
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <div id="top" style={{positon:"fixed", top:90, width: "100%", height: "6vh", color: "white", backgroundColor: "black" }}>
                <img style={{ height: "5vh", marginTop: "5px" }} src="https://sotellus.vercel.app/static/media/soTellUsSiteLogo.731a48c2.png"></img>
                <div style={{ float: "right", marginRight: "20px", marginTop: "7px" }}>
                    <AccountCircleIcon onClick={handleClick}></AccountCircleIcon>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {props.user ?(<div><MenuItem onClick={logout}>Logout</MenuItem><MenuItem onClick={()=>{history.push('/')}}>Home</MenuItem><MenuItem onClick={()=>{history.push('/account')}}>My account</MenuItem><MenuItem>{props.user.email}</MenuItem></div>):(<MenuItem>Login</MenuItem>)}
                    </Menu>
                </div>
            </div>
        </>
    );
}



const mapStateToProps = (state)=>{
    return {user: state.user}
  }
  
 export default connect(mapStateToProps)(Header);