import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Post from '../components/Post'
import PageNav from '../components/PageNav'
// import { blogs } from '../store'



class Blogs extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps){
    let currentPage = Number(this.props.params.page)
    let nextPage = Number(nextProps.params.page)
    if (currentPage !== nextPage) {
      this.props.pageNav(nextPage)
    }
  }
  render(){
    let {issues, totalNum} = this.props
    let page = Number(this.props.params.page)
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
}

export default Blogs
