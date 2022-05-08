import {Button, Menu, Typography, Avatar} from 'antd'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../images/crypto.png'
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize',handleResize)
  }, [])

  useEffect(() => {
      if(screenSize < 768){
        setActiveMenu(false)
      }
      else{
          setActiveMenu(true)
      }
  }, [screenSize])

  function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
    getItem(
     <Link to="/">Home</Link>,
    '1',
    <HomeOutlined />
  ),
  getItem(
     <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    '2',
    <FundOutlined />,
  ),
  getItem(
     <Link to="/news">News</Link>,
    '3',
    <BulbOutlined />,
  ),
];

  return (
    <div className = "nav-container">
        <div className= "logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to = "/">Cryptoverse</Link>
            </Typography.Title>
            <Button className = "menu-control-container" onClick = {() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
        </div>
        { activeMenu && (
        <Menu theme = "dark"
        items={items}>
        </Menu>
        )}
    </div>
  )
}

export default NavBar