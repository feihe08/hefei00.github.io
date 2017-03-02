import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import {post} from '../store'

export default function Blog (props) {
  let id = props.params.id
  let issue = post(id)
  return (
    <div>
      <Header />
      <div className='content'>
        <Article post={issue} />
      </div>
      <Footer />
    </div>
  )
}
