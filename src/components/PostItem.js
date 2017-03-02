import React from 'react'
import PostTime from './PostTime'
import PostTitle from './PostTitle'
import './PostItem.css'

export default function PostItem (props) {
  let issue = props.issue
  return (
    <div className='post-item'>
      <PostTime time={issue.created_at} />
      <PostTitle id={issue.id} title={issue.title} />
    </div>
  )
}
