import React from 'react'
import { Link } from 'react-router-dom'
import './PostTitle.css'

export default function PostTitle(props) {
  return (
    <h2>
      <Link className='post-title' to={`/post/${props.id}`}>{props.title}</Link>
    </h2>
  )
}
