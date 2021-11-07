import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <BrowserRouter>
        <div className="container">
        <Header />
        <div className="main">
          <div className="main__content">
            <div className="container">
              This is content
            </div>
          </div>
        <Footer />
        </div>
      </div>
    </BrowserRouter>

  )
}
export default Layout
