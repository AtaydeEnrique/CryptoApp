import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import LogoIcon from '../assets/icons/logo.svg'
import HomeIcon from '../assets/icons/home.svg' 
import CryptoIcon from '../assets/icons/crypto.svg' 
import NewsIcon from '../assets/icons/news.svg' 

import './Navbar.css'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 850)
  const [navActive, setNavActive] = useState(true)
  const activateNavHandler = () => setNavActive((n)=>!n)
  window.addEventListener('resize', function(event){
    setCollapsed(window.innerWidth <= 850)
  });
  return (
    <Fragment>
    {!collapsed ? 
      (
        <nav className='nav-container'>
          <Link to='/'>
            <div className='logo-container'>
              <img className='logo-icon'src={LogoIcon} alt='Page logo'></img>
              <p>Crypto App</p>
            </div>
          </Link>
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
      ) : 
      (
        <Fragment>
          <nav className='nav-container-collapsed'>
            <div className='logo-container-collapsed'>
              <div className='logo-cluster'>
                <img className='logo-icon-collapsed'src={LogoIcon} alt='Page logo'></img>
                <Link to='/'><p>Crypto App</p></Link>
              </div>
              
              <div className='hamburguer' onClick={activateNavHandler}>
                <ul className={`burger-lines${!navActive ? ' active' : ''}`}>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </nav>
          {!navActive && (
              <ul className='burger-menu'>
                <Link to='/' className='burger-link' onClick={activateNavHandler}>
                  <img className='link-icon'src={HomeIcon} alt='Home'></img>
                  <li>Homepage</li>
                </Link>
                <Link to='/cryptocurrencies' className='burger-link' onClick={activateNavHandler}>
                  <img className='link-icon' src={CryptoIcon} alt='Cryptocurrencies'></img>
                  <li>Cryptocurrencies</li>
                </Link>
                <Link to='/news' className='burger-link' onClick={activateNavHandler}>
                  <img className='link-icon' src={NewsIcon} alt='News'></img>
                  <li>News</li>
                </Link>
              </ul>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default Navbar