import React from 'react'
import Markdown from 'react-markdown'
import './PostContent.css'

export default function PostContent(props) {
  return (
    <div className='post-content'>
      <Markdown source={props.content} />
    </div>
  )
}
