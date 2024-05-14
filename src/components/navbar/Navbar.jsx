import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  let {pathname} = useLocation()
  
  if(pathname.includes("register") || pathname.includes("admin")){
    return <></>
  }

  return (
    <header className='header'>
        <h2>Logo</h2>
        <NavLink className='header__link' to={"/"}>Home</NavLink>
        <NavLink className='header__link ' to={"/about"}>About</NavLink>
        <NavLink className='header__link ' to={"/register"}>Login</NavLink>
    </header>
  )
}

export default Navbar