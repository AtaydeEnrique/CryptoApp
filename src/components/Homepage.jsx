import React from 'react'
import CryptoCurrencies from './Cryptocurrencies/Cryptocurrencies'
import millify from 'millify'

import { useGetCryptoStatsQuery } from '../services/cryptoApi'
import './Homepage.css'
import CryptoCard from './Cryptocurrencies/CryptoCard'

const Homepage = () => {
  const { data:coinsStats, isFetching } = useGetCryptoStatsQuery()
  if (isFetching) return 'Loading...'

  const stats = coinsStats?.data
  console.log(stats)
  return (
    <div className='home-container'>
        <h1>Global Crypto Stats</h1>
        <div className='global-stats-grid'>
          <div className='global-stats-contanier'>
            <h4>Total Cryptos</h4>
            <p>{stats.totalCoins}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total Exchanges</h4>
            <p>{stats.totalExchanges}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total Market Cap</h4>
            <p>{millify(stats.totalMarketCap)}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total 24h Volume</h4>
            <p>{millify(stats.total24hVolume)}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total Markets</h4>
            <p>{stats.totalMarkets}</p>
          </div>
        </div>
        <h5>Current Best Cryptos</h5>
        <div className='stats-grid'>
        {stats?.bestCoins?.map((coin) => (
          <CryptoCard crypto={coin} key={coin.uuid} stat={true}/>
        ))}
        </div>
        <h5>Newest cryptos</h5>
        <div className='stats-grid'>
        {stats?.newestCoins?.map((coin) => (
          <CryptoCard crypto={coin} key={coin.uuid} stat={true}/>
        ))}
        </div>
        <h2>Top 10 Cryptocurrencies in the world</h2>
        <CryptoCurrencies simplified={true}/>
        <h2>Latest Cryptonews</h2>
    </div>
  )
}

export default Homepage