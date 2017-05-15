import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import BlogNav from '../components/BlogNav'
import Comment from '../components/Comment'

export default function Blog(props) {
  let issue = props.issue
  let issueList = props.issueList
  if (!issue) {
    issue = issueList[0]
  }
  return (
    <div>
      <Header />
      <div className='content'>
        <Article post={issue} />
        <Comment issueNum={issue.number}></Comment>
      </div>
      <BlogNav index={issue._index} issueList={issueList} />
      <Footer />
    </div>
  )
}
