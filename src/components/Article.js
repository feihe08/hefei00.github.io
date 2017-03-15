import React from 'react'
import PostContent from './PostContent'
import PostTime from './PostTime'
import './Article.css'

export default function Article (props) {
  let post = props.post
  document.body.scrollTop = 0
  return (
    <div className='article'>
      <h1 className='article-title'>{post.title}</h1>
      <PostTime time={post.created_at} />
      <PostContent content={post.body} />
    </div>
  )
}
