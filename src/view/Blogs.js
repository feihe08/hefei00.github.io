import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
import {blogs} from '../store'

export default function Blogs (props) {
  let issues = blogs()
  return (
    <div>
      <Header />
      <div className='content'>
        {issues.map(issue => {
          return <Post post={issue} key={issue.id} />
        })}
      </div>
      <Footer />
    </div>
  )
}
