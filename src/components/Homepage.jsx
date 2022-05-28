import React from 'react'
import CryptoCurrencies from './Cryptocurrencies/Cryptocurrencies'

const Homepage = () => {
  return (
    <div>
        <h2>Global Crypto Stats</h2>
        <h2>Top 10 Cryptocurrencies in the world</h2>
        <CryptoCurrencies simplified={true}/>
        <h2>Latest Cryptonews</h2>
    </div>
  )
}

export default Homepage