import React from 'react'
import millify from 'millify'

import CryptoCard from './Cryptocurrencies/CryptoCard'
import Loading from './UX/Loading'
import CryptoCurrencies from './Cryptocurrencies/Cryptocurrencies'

import { useGetCryptoStatsQuery } from '../services/cryptoApi'
import './Homepage.css'
import News from './News'


const Homepage = () => {
  const { data:coinsStats, isFetching } = useGetCryptoStatsQuery()
  
  if (isFetching) return <Loading/>

  const stats = coinsStats?.data

  return (
    <div className='home-container'>
        <h1>Global Crypto Stats</h1>
        <div className='global-stats-grid'>
          <div className='global-stats-contanier'>
            <h4>Total Cryptos</h4>
            <p>{stats?.totalCoins}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total Exchanges</h4>
            <p>{stats?.totalExchanges}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total Market Cap</h4>
            <p>{millify(stats?.totalMarketCap)}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total 24h Volume</h4>
            <p>{millify(stats?.total24hVolume)}</p>
          </div>
          <div className='global-stats-contanier'>
            <h4>Total Markets</h4>
            <p>{stats?.totalMarkets}</p>
          </div>
        </div>
        <h5>Current Best Cryptos</h5>
        <div className='stats-grid'>
        {stats?.bestCoins?.map((coin,i) => (
          <div className='stats-card' key={coin.uuid}>
            <CryptoCard crypto={coin}  stat={true}/>
          </div>
        ))}
        </div>
        <h5>Newest cryptos</h5>
        <div className='stats-grid'>
        {stats?.newestCoins?.map((coin) => (
          <div className='stats-card' key={coin.uuid}>
            <CryptoCard crypto={coin} stat={true}/>
          </div>
        ))}
        </div>
        <h2>Top 10 Cryptocurrencies in the world</h2>
        <CryptoCurrencies simplified={true}/>
        <h2>Latest Cryptonews</h2>
        <News simplified={true}/>
    </div>
  )
}

export default Homepage