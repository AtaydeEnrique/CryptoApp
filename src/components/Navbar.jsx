import React from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '../assets/icons/logo.svg'
import HomeIcon from '../assets/icons/home.svg' 
import CryptoIcon from '../assets/icons/crypto.svg' 
import NewsIcon from '../assets/icons/news.svg' 

import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='nav-container'>
        <div className='logo-container'>
          <img className='logo-icon'src={LogoIcon} alt='Page logo'></img>
          <p>Crypto App</p>
        </div>
        <div className='links-container' >
          <Link to='/'>
            <div className='link'>
              <img className='link-icon'src={HomeIcon} alt='Home'></img>
              <p>Homepage</p>
            </div>
          </Link>
          <Link to='/cryptocurrencies'>
            <div className='link'>
              <img className='link-icon' src={CryptoIcon} alt='Cryptocurrencies'></img>
              <p>Cryptocurrencies</p>
            </div>
          </Link>
          <Link to='/news'>
            <div className='link'>
              <img className='link-icon' src={NewsIcon} alt='News'></img>
              <p>News</p>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar