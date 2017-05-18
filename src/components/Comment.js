import React from 'react'
import './Comment.css'
export default function Comment(props) {
  return (
    <div className="comment">
      <a href={'https://github.com/hefei00/blog/issues/' + props.issueNum} target='_blank' rel="noopener noreferrer">
        和我交流
      </a>
    </div>
  )
}
