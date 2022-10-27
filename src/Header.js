import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from '@mui/icons-material/Chat';
import logo from './logo.png';
import IconButton from '@mui/material/IconButton';


const Header = () => {
    return (
        // BEM
        <div className="header">
          <IconButton>
            <AccountCircleIcon className="header__icon" fontSize="large" />
          </IconButton>
          <img
            className="header__logo"
            src={logo}
            alt="tinder logo" />
        <IconButton>
        <ChatIcon className="header__icon" fontSize="large" />
        </IconButton>
        </div>
    );
}

export default Header;