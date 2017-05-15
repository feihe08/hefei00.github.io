import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header(props) {
  return (
    <div className='header'>
      <div className='home'>
        <Link to='/page/1'>h</Link>
      </div>
      <div className='links'>
        <Link to='/archive'>Archive</Link>
      </div>
      {/*<div className='links'>
        <Link to='/tags'>Tags</Link>
      </div>*/}
      <div className='links'>
        <a href='https://github.com/hefei00' target='_blank'>Github</a>
      </div>
    </div>
  )
}
