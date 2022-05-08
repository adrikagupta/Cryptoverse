import React from 'react'
import {Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {NavBar, Home,News,Cryptocurrencies,CryptoDetails} from './components';
import './App.css'
import 'antd/dist/antd.css'

const App = () => {
  return (
      <div className="app">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />}></Route>
              
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                ></Route>
                <Route
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                ></Route>
                <Route path="/news" element={<News />}></Route>
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptoverse
              <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
  );
}

export default App