import React from "react";
import "./assets/header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderLinks from "./HeaderLinks";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__left'>
          <a href='#' className='nav__logo'>
            <img
              src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1659348379~hmac=6ffa5464d75d89bee0fe310d7d45dc5d'
              alt=''
            />
          </a>
          <div className='nav__search'>
            <SearchIcon />
            <input type='text' />
          </div>
        </div>

        <div className='nav__list'>
          <HeaderLinks Icon={HomeIcon} title='Home' />
          <HeaderLinks Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderLinks Icon={WorkIcon} title='Jobs' />
          <HeaderLinks Icon={ChatIcon} title='Messaging' />
          <HeaderLinks Icon={NotificationsIcon} title='Notification' />
          <HeaderLinks
            avatar='Photo by Thyrone Paas from Pexels: https://www.pexels.com/photo/portrait-photo-of-man-1722198/'
            title='Me'
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
