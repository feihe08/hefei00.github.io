import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Blog(props) {
  return (
    <div>
      <Header />
      <div className='content'>
        <div>代码片段，纪录一些使用的代码段或者比较好的资料的链接</div>
      </div>
      <Footer />
    </div>
  )
}
