import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ed3bab0d86msh1f342dc380e14d8p17be50jsn28ccdec69363'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        })
    })
})

export const { useGetCryptosQuery , useGetCryptoDetailsQuery} = cryptoApi;

/*
redux allows us to create hooks to get data for the query; loadig states; finalized states;
add use and add Query to make it a hook
*/
// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
    // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    // 'X-RapidAPI-Key': 'ed3bab0d86msh1f342dc380e14d8p17be50jsn28ccdec69363'
//   }
// };