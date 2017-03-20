import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {labels, tags} from '../store'

export default function Tags (props) {
  let tagList = labels
  console.log(tagList)
  return (
    <div>
      <Header />
        <div className="content">
          {tagList.map(tag => <div>{tag.name}</div> )}
        </div>
      <Footer />
    </div>
  )
}
