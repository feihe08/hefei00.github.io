import React from 'react'
import {Link} from 'react-router'
import './PostTitle.css'

export default function PostTitle (props) {
  return <Link className='post-title' to={`/post/${props.id}`}>{props.title}</Link>
}
