import React from 'react'
import './sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
/* import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; */
import AddBox from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import { Avatar } from "@mui/material";

const Sidenav = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className='sidenav'>
      <img 
        src="/assets/instagram-logo.png" 
        alt="instagram"
        className='instagram-logo' 
      />
      <div className="sidenav-buttons">
        <button className='sidenav-button'>
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className='sidenav-button'>
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className='sidenav-button'>
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className='sidenav-button'>
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className='sidenav-button'>
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className='sidenav-button'>
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className='sidenav-button'>
          <AddBox />
          <span>Create</span>
        </button>

        <button className='sidenav-button'>
          <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" className='sidenav-profile' />
          {/* <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar> */}
          <span>
            {user.username}{" "}
          </span>
        </button>
      </div>
      <div className="sidenav-more">
      <button className="sidenav-button logout__button" onClick={handelLogout}>
          <LogoutIcon />
          <span>Logout</span>
        </button>
        <button className="sidenav-button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>

    </div>
  )
}

export default Sidenav