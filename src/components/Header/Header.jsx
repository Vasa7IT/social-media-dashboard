import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../../ThemeContext";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { HiOutlineLogout, HiOutlineMoon } from "react-icons/hi";
import profileImg from '../../assets/yogendra-singh-HrpYHchKb5Y-unsplash.jpg';
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Header = () => {
    const {dark,setDark} =useContext(ThemeContext);
    const logout =()=>{
        signOut(auth);
        window.location.reload();
    }

    function changeTheme(){
        setDark(!dark);
    }
  return(
    <header className={`smd__header ${dark && 'dark'}`}>
        <div className="search-bar">
            <input type="text" placeholder="Search Here" />
            <BiSearch className="header-icon"/>
        </div>
        <div className="tools">
            <AiOutlineUser className="header-icon" />
            <TbMessage className="header-icon" />
            <IoAnalytics className="header-icon" />

            <div className="header-divider"></div>

            <HiOutlineMoon className="header-icon" onClick={changeTheme}/>
            <RiSettingsLine className="header-icon" />
            <HiOutlineLogout className="header-icon"  onClick={logout} />

            <div className="header-divider"></div>

            <div className="user">
                <img src={profileImg} alt="" className="profile-img" />
            </div>
        </div>
    </header>
  )
};

export default Header;
