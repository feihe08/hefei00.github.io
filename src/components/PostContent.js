import React from 'react'
import Markdown from 'react-markdown'
import './PostContent.css'
import '../css/md.css'

export default function PostContent(props) {
  return (
    <div className='post-content'>
      <Markdown source={props.content} className="wrapper" />
    </div>
  )
}
