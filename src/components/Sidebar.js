import { Avatar } from "@mui/material";
import React from "react";
import "./assets/sidebar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <img src='' alt='' />
        <Avatar className='sidebar__img' />
        <h2 className='sidebar__title'>Welcome, Clinton!</h2>
        <a href='#'>Add a photo</a>
      </div>

      <div className='sidebar__infos'>
        <div className='sidebar__info'>
          <span className='sidebar__info-desc'>Connections</span>
          <span>Connect with alumni</span>
        </div>

        <div className='sidebar__info'>
          <span className='sidebar__info-desc'>
            Access exclusive tools & insights
          </span>
          <span>get hired faster, try premium free</span>
        </div>

        <div className='sidebar__info'>
          <BookmarkIcon />
          <span>My Items</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
