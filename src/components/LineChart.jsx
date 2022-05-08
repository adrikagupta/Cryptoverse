import {Line } from 'react-chartjs-2'
import {Col, Row, Typography} from 'antd';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  )

const {Title : AntTitle} = Typography;
const LineChart = ({coinHistory, currentPrice, coinName}) => {

  const coinPrice = []
  const coinTimestamp = []

  for(let i=0; i< coinHistory?.data?.history?.length; i+= 1){    
    coinPrice.unshift(coinHistory?.data?.history[i].price)
    coinTimestamp.unshift(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString())
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }
const options = {
elements: {
point:{
radius: 2
}
},
scales: 
{ 
  y: 
  { 
    ticks: 
    { 
      beginAtZero: true, 
    }, 
  }, 
}, 
};
    console.log(coinHistory)
  return (
    <>
    <Row className = "chart-header">
        <AntTitle level = {2} className = "chart-title">{coinName} Price</AntTitle>
        <Col className = "price-container">
            <AntTitle level = {5} className = "price-change">{coinHistory?.data?.change}%</AntTitle>
            <AntTitle level = {5} className = "current-price">Current {coinName} Price: ${currentPrice}</AntTitle>
        </Col>
    </Row>
    <Line data={data} options={options}/>
    </>
  )
}

export default LineChart