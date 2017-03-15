import React from 'react'
import {Link} from 'react-router'
import './Button.css'

export default function Button(props) {
  let {path, classes, text} = props
  return (
    <Link  to={path}>
      <button className={classes}>
        {text}
      </button>
    </Link>
  )
}
