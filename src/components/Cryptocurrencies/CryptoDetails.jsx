import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import millify from 'millify'

import Loading from '../UX/Loading'
import DollarIcon from '../../assets/icons/dollar.svg'
import RankIcon from '../../assets/icons/rank.svg'
import VolumeIcon from '../../assets/icons/volume.svg'
import TrophyIcon from '../../assets/icons/trophy.svg'
import GraphIcon from '../../assets/icons/graph.svg'
import ExchangeIcon from '../../assets/icons/exchange.svg'
import ExclamationIcon from '../../assets/icons/exclamation.svg'

import { useGetOneCryptoQuery } from '../../services/cryptoApi'
import './CryptoDetails.css'

const CryptoDetails = () => {
    const {id} = useParams()
    const {data,  isFetching} = useGetOneCryptoQuery(id)

    if (isFetching) return <Loading/>
    const coin = data?.data?.coin
    console.log(coin)
    const changeType = coin?.change == '-' ? 'negative' : 'positive'

  return (
    <Fragment>
      <div className='coin-header'>
        <div className='coin-header-name'>
          <h1>{coin.name} ({coin.symbol}) </h1>
          <img src={coin.iconUrl} alt='crypto icon'/>
        </div>
        <p>{coin.name} live price in US dollars, View value statistics, amrket cap and more.</p>
      </div>
      
      <div className='coin-tables'>
        <div className='coin-statistics-table'>
          <div className='coin-stat-header'>
            <h2 >{coin.name} Value Statistics</h2>
            <p>An overview showing the stats of {coin.name}.</p>
          </div>
          <div className='coin-stat-container'>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={DollarIcon} alt='USD'></img>
                <h3 className='stat-name'>Price to USD</h3>
              </div>
              <p>{millify(coin.price)}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={RankIcon} alt='CryptoRank'></img>
                <h3 className='stat-name'>Rank</h3>
              </div>
              <p>{coin.rank}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={VolumeIcon} alt='Volume'></img>
                <h3 className='stat-name'>24h Volume</h3>
              </div>
              <p>{millify(coin['24hVolume'])}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={DollarIcon} alt='Mrkt Cap'></img>
                <h3 className='stat-name'>Market Cap</h3>
              </div>
              <p>{millify(coin.marketCap)}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={TrophyIcon} alt='Highest'></img>
                <h3 className='stat-name'>All-time-high(daily avg.)</h3>
              </div>
              <p>{millify(coin?.allTimeHigh?.price)}</p>
            </div>
          </div>
        </div>

        <div className='coin-statistics-table'>
          <div className='coin-stat-header'> 
            <h2>Other Statistics</h2>
            <p>Stats of all cryptocurrencies for reference</p>

          </div>
          <div className='coin-stat-container'>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={GraphIcon} alt='Graph'></img>
                <h3 className='stat-name'>No. Of Markets</h3>
              </div>
              <p>{coin.numberOfMarkets}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={ExchangeIcon} alt='Exchange'></img>
                <h3 className='stat-name'>No. Of Exchanges</h3>
              </div>
              <p>{coin.numberOfExchanges}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={ExchangeIcon} alt='Exchange'></img>
                <h3 className='stat-name'>Change</h3>
              </div>
              <p className={`change-${changeType}`}>{coin.change}%</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={ExclamationIcon} alt='Exclamation'></img>
                <h3 className='stat-name'>Total Supply</h3>
              </div>
              <p>{millify(coin?.supply?.total)}</p>
            </div>
            <div className='coin-stat'>
              <div className='coin-stat-desc'>
                <img src={ExclamationIcon} alt='Exclamation'></img>
                <h3 className='stat-name'>Circulating Supply</h3>
              </div>
              <p>{millify(coin?.supply?.circulating)}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CryptoDetails