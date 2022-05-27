import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '../assets/icons/logo.png'
import HomeIcon from '../assets/icons/home.png' 
import CryptoIcon from '../assets/icons/crypto.png' 
import NewsIcon from '../assets/icons/news.png' 

import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='nav-container'>
        <div className='logo-container'>
          <img className='logo-icon'src={LogoIcon}></img>
          <h3>Crypto App</h3>
        </div>
        <div className='links-container' >
          <Link to='/'>
            <div className='link'>
              <img className='link-icon'src={HomeIcon}></img>
              <p>Homepage</p>
            </div>
          </Link>
          <Link to='/cryptocurrencies'>
            <div className='link'>
              <img className='link-icon' src={CryptoIcon}></img>
              <p>Cryptocurrencies</p>
            </div>
          </Link>
          <Link to='/news'>
            <div className='link'>
              <img className='link-icon' src={NewsIcon}></img>
              <p>News</p>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar