import React, { Fragment, useState } from 'react'
import NewsCard from './NewsCard'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../services/newsApi'
import './News.css'

const News = ({simplified}) => {
  const [search, setSearch] = useState('crypto')
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({newsCategory:search, count: simplified ? 6 : 12})
  const { data: cryptoList, } = useGetCryptosQuery(50);
  
  if (isFetching) return 'LOADING...'
  const coinNames = []
  const news = cryptoNews?.value

  cryptoList?.data?.coins.forEach(el => {
    coinNames.push(el.name)
  });
  console.log(search)

  return (
    <Fragment>
      {!simplified && (
        <Fragment>
        <div className='news-header'><h1>News</h1></div>
          <form className='news-form' onSubmit={e => { e.preventDefault(); }}>
            <select onChange={(e) => setSearch(e.target.value)} value={search}>
              <option value={'crypto'}>Crypto</option>
              {coinNames?.map((coin)=>(
                <option value={coin} >{coin}</option>
              ))}
            </select>
          </form> 
        </Fragment>)
        }
      <div className='news-grid'>
        {news?.map((article,i)=>(
          <NewsCard article={article} key={i}/>
        ))}

      </div>
    </Fragment>
  )
}

export default News