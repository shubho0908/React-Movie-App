import React from 'react'
import Logo from './logo.png'
import Search from './Search'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="main-logo">
            <img onClick={()=>{
                window.location.reload()
            }} style={{width:"180px"}} src={Logo} alt="" />
        </div>
        <Search/>
    </div>
    </>
  )
}

export default Navbar