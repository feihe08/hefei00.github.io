import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PostItem from '../components/PostItem'
import { archives } from '../store'
import './Archive.css'

export default function Archive (props) {
  let issues = archives()
  return (
    <div>
      <Header />
      <div className='content'>
        <div className='archive'>
          {issues.map(issue =>{
            if(typeof issue === 'string'){
              return <h2 className="archive-year" key={issue}>{issue}</h2>
            }else {
              return <PostItem issue={issue} key={issue.id} />
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
