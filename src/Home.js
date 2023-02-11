import React from 'react'
import { GlobalContext } from './context'

const Home = () => {
    const name = GlobalContext()
  return (
    <>
    <div className="main">
        My Home Page
    </div>
    <p>{name}</p>
    </>
  )
}

export default Home