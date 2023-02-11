import React from 'react'
import { GlobalContext } from './context'

const Movies = () => {
  const {Movies} = GlobalContext() //The variables name should be as same the Hook, e.g. "Movies"
  return (
    <>
    {Movies.map((element)=>{
      return(
        <div className="movie-card">
          <h2>{element.Title}</h2>
          <img src={element.Poster} alt="" />
        </div>
      )
    })}
    </>
  )
}

export default Movies