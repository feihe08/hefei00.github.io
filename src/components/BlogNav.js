import React from 'react'
import Button from './Button'
import {issues} from '../store'

export default function BLogNav(props) {
  let index = props.index,
      showPre = 'btn-show',
      showNext = 'btn-show',
      prev = issues[index - 1] && issues[index - 1].id,
      next = issues[index + 1] && issues[index + 1].id
  if(index === 0){
    showPre = 'btn-hide'
  }
  if(index === issues.length - 1){
    showNext = 'btn-hide'
  }

  return (
    <div className="page-nav">
      <Button path={`/post/${prev}`} text={'上一篇'} classes={showPre}  />

      <Button path={`/post/${next}`} text={'下一篇'} classes={showNext} />
    </div>
  )
}
