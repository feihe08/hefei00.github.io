import React from 'react'
import {perPage, issues} from '../store'
import {Link} from 'react-router'
import './PageNav.css'

export default function PageNav (props) {
  let page = props.page
  let showPre = page > 1 ? 'btn-show' : 'btn-hide'
  let showNext = page * perPage >= issues.length ? 'btn-hide' : 'btn-show'
  return (
    <div className="page-nav">
      <Link  to={`/${page-1}`}>
        <button className={showPre}>
          上一页
        </button>
      </Link>
      <Link  to={`/${page+1}`}>
        <button className={showNext}>
          下一页
        </button>
      </Link>
    </div>
  )
}
