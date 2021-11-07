import React from 'react'
import {Link , useLocation} from 'react-router-dom'
import logo from '../../assets/images/icons/logo.png'


const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Soap",
    path: "/soap",
  },
  {
    display: "HandMade",
    path: "/handmade",
  },
  {
    display: "Paper",
    path: "/papercut",
  },
  {
    display: "Paper",
    path: "/",
  },
  {
    display: "Paper",
    path: "/",
  },
  {
    display: "Paper",
    path: "/",
  },

]

const Header = () => {
  const menuToggle =() => {

  }

  return (
    <div className="header">
      <div className="headerBar">
        <div className="headerBar__mobile-toggle" onClick={menuToggle}>
          this is mobile menu
        </div>
        <div className="headerBar__left">
          <div className="headerBar__left__logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="headerBar_center">
            this is center
        </div>
        <div className="headerBar__right">
            this is right
        </div>
      </div>
    </div>
  )
}
export default Header
