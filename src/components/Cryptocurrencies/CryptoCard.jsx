import React from 'react'
import millify from 'millify'

import './CryptoCard.css'

const CryptoCard = ({crypto, stat}) => {
  let percent = false
  if (!stat) {
    percent = crypto.change[0] === '-'
  }
  
  return (
    <div className='crypto-card'>
        <div className='card-header'>
            <h3>{crypto.rank ? crypto.rank : crypto.symbol}. {crypto.name}</h3>
            <img src={crypto.iconUrl} alt='Cypto Logo'/>
        </div>
        {!stat && (
        <div className='card-details'>
            <p>Price: {millify(crypto.price,3)} USD</p>
            <p>Market Cap: {millify(crypto.marketCap)}</p>
            <p>Daily Change: <span className={`card-percent ${!percent ? 'positive' : 'negative'}`}>{millify(crypto.change)}%</span></p>
        </div>)
        }

    </div>
  )
}

export default CryptoCard