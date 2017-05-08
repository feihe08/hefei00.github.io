import React from 'react'
import './PostTime.css'

export default function PostTime(props) {
  let date = new Date(props.time)
  return <p className='post-time'>{format(date)}</p>
}


function format(date) {
  let dateStr = date.toDateString()
  let dateArr = dateStr.split(' ')
  dateArr.shift()
  let year = dateArr.pop()
  return dateArr.join(' ') + ', ' + year
}