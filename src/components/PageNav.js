import React from 'react'
import './PageNav.css'
import Button from '../components/Button'

export default function PageNav (props) {
  let {page, totalNum} = props
  let showPre = page > 1 ? 'btn-show' : 'btn-hide'
  let showNext = page * 4 >= totalNum ? 'btn-hide' : 'btn-show'
  return (
    <div className="page-nav">
      <Button path={`/page/${page-1}`} text={'上一页'} classes={showPre}  />

      <Button path={`/page/${page+1}`} text={'下一页'} classes={showNext} />
    </div>
  )
}
