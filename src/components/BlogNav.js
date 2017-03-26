import React from 'react'
import Button from './Button'

export default function BLogNav(props) {
  let index = props.index,
      issueList = props.issueList,
      showPre = 'btn-show',
      showNext = 'btn-show',
      prev = issueList[index - 1] && issueList[index - 1].id,
      next = issueList[index + 1] && issueList[index + 1].id
  if(index === 0){
    showPre = 'btn-hide'
  }
  if(index === issueList.length - 1){
    showNext = 'btn-hide'
  }

  return (
    <div className="page-nav">
      <Button path={`/post/${prev}`} text={'上一篇'} classes={showPre}  />

      <Button path={`/post/${next}`} text={'下一篇'} classes={showNext} />
    </div>
  )
}
