import React from 'react'
import './PostTime.css'

export default function PostTime(props) {
  return <p className='post-time'>{props.time.substr(0, 10)}</p>
}
