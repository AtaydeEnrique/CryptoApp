import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '260f2e4c21mshfec43214a5fbcd5p1533dcjsne187895986c5'
  }

const createRequest = (url) => ({url, headers: newsApiHeaders})

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&setLang=en&safeSarch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = newsApi