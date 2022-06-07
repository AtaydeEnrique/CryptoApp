import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '260f2e4c21mshfec43214a5fbcd5p1533dcjsne187895986c5'
}

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoStats: builder.query({
      query: () => createRequest(`/stats`),
    }),
    getOneCrypto: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
  }),
  }),
})

export const { useGetCryptosQuery, useGetCryptoStatsQuery, useGetOneCryptoQuery, useGetCryptoHistoryQuery } = cryptoApi