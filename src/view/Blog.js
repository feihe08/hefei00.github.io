import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import BlogNav from '../components/BlogNav'
import {post} from '../store'

export default function Blog (props) {
  let id = props.params.id
  let issue = post(id)
  if (!issue){
    props.router.replace('/404/')
  }
  return (
    <div>
      <Header />
      <div className='content'>
        <Article post={issue} />
      </div>
      <BlogNav index={issue._index} />
      <Footer />
    </div>
  )
}
