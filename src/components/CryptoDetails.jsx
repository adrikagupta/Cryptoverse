import React from 'react'
import {useParams} from 'react-router-dom'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser';
import {Row,Col,Typography,Select} from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';


const CryptoDetails = () => {
  const {coinId} = useParams()
  const {data, isFetching} = useGetCryptoDetails(coinId);
  
  return (
    <div>CryptoDetails {coinId}</div>
  )
}

export default CryptoDetails