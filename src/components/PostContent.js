import React from 'react'
import './PostContent.css'
import '../css/md.css'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

function createMarkup(str) {
  return {__html: str};
}

let md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>` 
      } catch (__) {}
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})

export default function PostContent(props) {
  return (
    <div className='post-content'>
      <div className="wrapper" dangerouslySetInnerHTML={createMarkup(md.render(props.content))}></div>
    </div>
  )
}
