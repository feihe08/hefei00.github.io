import React from 'react'
import PostTitle from './PostTitle'
import PostTime from './PostTime'
import PostContent from './PostContent'
import {Link} from 'react-router'
import './Post.css'

export default function Post (props) {
  let post = props.post
  post.body = post.body.replace(/^#[^#]+/, '')
  return (
    <div className='post'>
      <PostTitle id={post.id} title={post.title} />
      <PostTime time={post.created_at} />
      <PostContent content={post.body.substr(0, 400)} />
      <Link to={`post/${post.id}`} className='post-read-more'>....more</Link>
    </div>
  )
}
