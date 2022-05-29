import React, { Fragment, useState, useEffect } from 'react'
import CryptoCard from './CryptoCard'

import { useGetCryptosQuery } from '../../services/cryptoApi'
import './Cryptocurrencies.css'
import Loading from '../UX/Loading'

const Cryptocurrencies= ({simplified}) => {
  const count = simplified ? 10 : 100
  const { data: cryptoList , isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    const filtered = cryptoList?.data?.coins?.filter((el)=>el.name?.toLowerCase().includes(search.toLowerCase()))
    setCryptos(filtered)
  
  }, [search, cryptoList])

  if (isFetching) return <Loading/>
  
  return (
    <Fragment>
      {!simplified && (
        <Fragment>
          <div className='cryptos-header'>
              <h1>Cryptocurrencies</h1>
          </div>
          <form className='cryptos-form' onSubmit={e => { e.preventDefault(); }}>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search cryptocurrency'/>
          </form> 
        </Fragment>)
        }
        <div className='cryptos-grid'>
            {cryptos?.map((crypto)=>(
              <CryptoCard key={crypto.uuid} crypto={crypto}/>
            ))}
        </div>
    </Fragment>
  )
}

export default Cryptocurrencies