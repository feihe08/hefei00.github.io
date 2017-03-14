import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
import PageNav from '../components/PageNav'
import {blogs} from '../store'

export default function Blogs (props) {
  let page = props.params.page
  let issues = blogs(page)
  document.body.scrollTop = 0
  return (
    <div>
      <Header />
      <div className='content'>
        {issues.map(issue => {
          return <Post post={issue} key={issue.id} />
        })}
      </div>
      <PageNav page={Number(page)} />
      <Footer />
    </div>
  )
}
