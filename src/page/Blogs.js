import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
import PageNav from '../components/PageNav'

export default function Blogs(props) {
  let { issues, totalNum } = props
  let page = Number(props.match.params.page)
  document.body.scrollTop = 0
  return (
    <div>
      <Header />
      <div className='content'>
        {issues.map(issue => {
          return <Post post={issue} key={issue.id} />
        })}
      </div>
      <PageNav page={page} totalNum={totalNum} />
      <Footer />
    </div>
  )
}
