import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const {id} = useParams()
  return (
    <div>You searched for <b>{id}</b> movie.</div>
  )
}

export default DetailPage