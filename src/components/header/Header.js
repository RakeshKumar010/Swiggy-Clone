import React from 'react'
import Img_Src from '../../assets/logo.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
const Header = () => {
  return (
    <div className='header'>
        
        <ul>
        <img src={Img_Src} alt="Logo" className='logo' />
        <div className="Search" >
        <SearchIcon/>
        <li>Search</li>
        </div>
        <div className="Offers">
          <CampaignOutlinedIcon/>
        <li>Offers</li>
        </div>
        <div className="Help">
          <HelpOutlineIcon/>
        <li>Help</li>
        </div>
        <div className="SignIn">
          <AccountCircleOutlinedIcon/>
        <li>Sign In</li>
        </div>
        <div className="Cart">
          <LocalMallOutlinedIcon/>
        <li>Cart</li>
        </div>
        </ul>
    </div>
    
  )
}

export default Header;