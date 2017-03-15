import React from 'react'
import {perPage, issues} from '../store'
import './PageNav.css'
import Button from '../components/Button'

export default function PageNav (props) {
  let page = props.page
  let showPre = page > 1 ? 'btn-show' : 'btn-hide'
  let showNext = page * perPage >= issues.length ? 'btn-hide' : 'btn-show'
  return (
    <div className="page-nav">
      <Button path={`/page/${page-1}`} text={'上一页'} classes={showPre}  />

      <Button path={`/page/${page+1}`} text={'下一页'} classes={showNext} />
    </div>
  )
}
