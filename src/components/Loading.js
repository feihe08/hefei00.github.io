import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.css'

export default function Loading() {
  return (
    <div className="overlay">
      <ReactLoading type='bubbles' color='#e3e3e3' />
    </div>
  )
}
