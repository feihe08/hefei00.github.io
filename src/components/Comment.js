import React from 'react'
import './Comment.css'
export default function Comment(props) {
  return (
    <div className="comment">
      <a href={'https://github.com/hefei00/blog/issues/' + props.issueNum} target='_blank'>
        欢迎到github交流
      </a>
    </div>
  )
}
