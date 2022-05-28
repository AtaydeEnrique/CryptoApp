import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies'
import News from './components/News'
import './App.css'

export default function App() {
  return (
    <div className='app'>
        <div className="noise"/>
        <Navbar/>
        <main>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
        </Routes>
        </main>
        <footer></footer>
    </div>
  )
}
