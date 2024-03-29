import React from 'react'
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import {logOutUserAction} from "../../redux/userAction"
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  const myDispatch = useDispatch()

  const handleLogout = ()=>{
    logOutUserAction(myDispatch)
  }

  return (
    <div className="sidebar">
      <div className='top'>
        <Link to="/" style ={{textDecoration: "none"}}>
          <span className='logo'>samadmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style ={{textDecoration: "none"}}>
            <li><DashboardIcon className = "icon"/><span>Dashboard</span></li> 
          </Link>
          
          <p className="title">LISTS</p>
          <Link to="/User" style ={{textDecoration: "none"}}>
            <li><PersonOutlineIcon className = "icon"/><span>Users</span></li>
          </Link>
          <Link to="/Books" style ={{textDecoration: "none"}}>
            <li><StoreIcon className = "icon"/><span>Books</span></li>
          </Link>
          <Link to="/Transaction" style ={{textDecoration: "none"}}>
            <li><CreditCardIcon className = "icon"/><span>Transactions</span></li>  
          </Link>
          <li><LocalShippingIcon className = "icon"/><span>Delivery</span></li>
          
          <p className="title">USEFUL</p>
          <li><InsertChartIcon className = "icon"/><span>Stats</span></li>
          <li><NotificationsNoneIcon className = "icon"/><span>Notification</span></li>
          
          <p className="title">SERVICE</p>
          <li><SettingsSystemDaydreamOutlinedIcon  className = "icon"/><span>System Health</span></li>
          <li><PsychologyOutlinedIcon  className = "icon"/><span>Logs</span></li>
          <li><SettingsApplicationsIcon className = "icon" /><span>Settings</span></li>
          
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className = "icon" /><span>Profile</span></li>
          <li onClick = {handleLogout}><ExitToAppIcon  className = "icon" /><span>Logout</span></li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption" onClick = {()=> dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick = {()=> dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar