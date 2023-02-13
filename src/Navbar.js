import React from 'react'
import Logo from './logo.png'
import Search from './Search'
import './Navbar.css'
import User from './user.png'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
    <div className="navbar" id='navbar'>
        <div className="main-logo">
            <img onClick={()=>{
                window.location.reload()
            }} style={{width:"180px"}} src={Logo} alt="" />
        </div>
        <Search/>
        <div className="authentication">
          {
            isAuthenticated ? (
              <button className='logout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
            ) :
            (
              <div onClick={() => loginWithRedirect()} className="login">
                <div className="user-logo" title='Login/Register'>
            <img className='user-img' src={User} alt="User Image" />
            <p style={{marginLeft:"13px", fontSize:"14px"}}>Login/Register</p>
          </div>
              </div>
            )
          }
          {/* <div onClick={() => loginWithRedirect()} className="user-logo">
            <img className='user-img' src={User} alt="" />
          </div>
          <p style={{marginLeft:"13px", fontSize:"14px"}}>Login/Signup</p> */}
        </div>
        {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> */}
    </div>
    <div className="up-arrow">
      <div className="uparr">
        <a className='top' href="#navbar">&uarr;</a>
      </div>
    </div>
    </>
  )
}

export default Navbar