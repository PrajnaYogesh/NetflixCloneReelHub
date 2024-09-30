import React from 'react'
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom'
import logo from '../images/Black and White Modern Streetwear Logo (1).png'

function Header() {
  return (
    <div className='headerContainer'> 
    <div className="logoContainer">
        <img className='logoStyle' src={logo} alt="" />
    </div>

    <div className="choices">
        <Link to="/" className='eachIcon'>Home</Link>
        <Link to="/tv" className='eachIcon'>TV Shows</Link>
        <Link to="/movie" className='eachIcon'>Movies</Link>
               {/* <Link to="/trending" className='eachIcon'>Trending Now</Link> */}
        <Link to="/list" className='eachIcon'>My List</Link>
    </div>


    <div className="notifications">
     
     <div className='navIcons'><FaSearch /></div> 
    <div className='navIcons'><IoMdNotifications /></div> 
     <p className='navIcons'>Account</p>


    </div>
    </div>
  )
}

export default Header