import React, { Fragment, useState, useEffect } from 'react'
import CryptoCard from './CryptoCard'

import { useGetCryptosQuery } from '../../services/cryptoApi'
import './Cryptocurrencies.css'

function Cryptocurrencies() {
  const [search, setSearch] = useState('')
  const { data , isFetching } = useGetCryptosQuery(100);
  const cryptos = data?.data?.coins

  // useEffect(() => {
  //   const toFilter = data?.data?.coins
  //   cryptos = toFilter.filter((el)=>el.name.includes(search.toLowerCase()))
  

  // }, [search])
  if (isFetching) return 'LOADING...'
  

  return (
    <Fragment>
        <div className='cryptos-header'>
            <h1>Cryptos</h1>
        </div>
        <form onSubmit={e => { e.preventDefault(); }}>
          <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search crypto..'/>
        </form>
        <div className='cryptos-grid'>
            {cryptos.map((crypto)=>(
              <CryptoCard key={crypto.uuid} crypto={crypto}/>
            ))}
        </div>
    </Fragment>
  )
}

export default Cryptocurrencies