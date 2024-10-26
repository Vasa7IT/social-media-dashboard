import "./nav.css";
import profileImg from '../../assets/yogendra-singh-HrpYHchKb5Y-unsplash.jpg';
import NavIcon from "../NavIcon/NavIcon";
import { FiChevronLeft, FiMessageSquare } from "react-icons/fi";
import { TbDashboard, TbFileUpload } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import {
  AiOutlineUsergroupAdd,
  AiOutlineDollarCircle,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { MdOutlineNotificationsActive, MdSwapHoriz } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiMessageAltAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import { useState,useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";

const Nav = () => {
  const[nav,setnav] = useState(false);
  // consume the context 
  const {dark,setDark}= useContext(ThemeContext);

  const [username, setusername] = useState("");

  function changeTheme(){
    setDark(!dark);
  }

useEffect(()=>{
  setusername(localStorage.getItem('username'));
},[]);

  return (
    <div className={`smd__nav ${nav && "active"} ${dark && 'dark'}`}>
      <div className={`menu ${nav && "active"}`} onClick={()=>{
        setnav(prev=>!prev);
      }}>
      
        <FiChevronLeft className="menu-icon"/>
      </div>
      <header className="nav__header">
        <div className="smd__nav-profile">
          <img
            src={profileImg}
            alt="user_image"
            className="profile_image"
          />
        </div>
        <span>{username}</span>
      </header>
      <NavIcon Icon={TbDashboard} title={"Dashboard"} />
      <NavIcon Icon={VscGraphLine} title={"Analytics"} />
      <NavIcon Icon={FiMessageSquare} title={"Messages"} />
      <NavIcon Icon={AiOutlineUsergroupAdd} title={"Followers"} />

      <div className="divider"></div>

      <NavIcon Icon={MdOutlineNotificationsActive} title={"Notifications"} />
      <NavIcon Icon={RiAccountCircleLine} title={"Following"} />
      <NavIcon Icon={AiOutlineDollarCircle} title={"Earnings"} />
      <NavIcon Icon={TbFileUpload} title={"Posts"} />
      <NavIcon Icon={BiMessageAltAdd} title={"Message Requests"} />
      <NavIcon Icon={AiOutlineUserSwitch} title={"Change Account"} />
      
      <div className="divider"></div>

      <NavIcon
        Icon={MdSwapHoriz}
        title={`${
          dark ? "Switch to Light Theme" : "Switch to Dark Theme"
        }`}
        onClick={changeTheme}
      />
      <NavIcon Icon={BiDotsHorizontalRounded} title={"More details"} />
      
      <svg
      className="bg-img"
      preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#ffffff', width: '133%', height: 120, }}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" 
    opacity=".5" />
  </svg>
    </div>
  );
};

export default Nav;
