import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import BlogNav from '../components/BlogNav'

export default function Blog (props) {
  let issue = props.issue
  let issueList = props.issueList
  if (!issue){
    props.router.replace('/404/')
  }
  return (
    <div>
      <Header />
      <div className='content'>
        <Article post={issue} />
      </div>
      <BlogNav index={issue._index} issueList={issueList} />
      <Footer />
    </div>
  )
}
