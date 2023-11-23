import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import './styles/global.css'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </React.StrictMode>,
)