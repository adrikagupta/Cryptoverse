import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'
import {useEffect, useState} from 'react'
import {useGetCryptosQuery} from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
  const count  = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
  const [searchItem, setSearchItem] = useState('')
  const [cryptos,setCryptos] = useState([])
  /*
 useEffect is a combination of a component that mount happening at the start and also component update

  */
 useEffect(()=>{
  const filteredData = cryptosList?.data?.coins?.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()));
  setCryptos(filteredData)
 },[cryptosList, searchItem])


  if(isFetching) return 'Loading..'
  return (
    <>
    {
    !simplified && 
    (<div className = "search-crypto">
      <Input placeholder="Search cryptocurrency" onChange = {(e) => setSearchItem(e.target.value)}/>
    </div>
    )
    }
    <Row gutter={[32,32]} className = "crypto-card-container">
      { cryptos?.map((currency) => (
        <Col xs = {24} sm={12} lg={6} className = "crypto-card" key={currency.uuid}>
          <Link to= {`/crypto/${currency.uuid}`}>
            <Card title={`${currency.rank} ${currency.name}`}
            extra = {<img className="crypto-image" src={currency.iconUrl}></img>} hoverable>
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies