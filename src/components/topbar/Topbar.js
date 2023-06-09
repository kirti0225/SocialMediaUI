import React from 'react';
import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className='topbarContainer'>
         <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FaceBook</span>
        </Link>
      </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon/>
                <input type="text" placeholder='Search for friend, post or video' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsActiveIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <Link to="/profile" style={{ textDecoration: "none" }}>
            <img src="assests/profiles/pic1.jpg" alt="" className="topbarImg" /></Link>
        </div>
      
    </div>
  )
}

export default Topbar
