import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import './BlogPage.scss'

const markdownRenderer = remark().use(reactRenderer, {
  sanitize: { strip: ['script'] },
})

const md = `
# this is an h1
this is a p with some content

## this is an h2 subheader
that also has some content. But let's make this one slightly longer.that also
has some content. But let's make this one slightly longer. and longer and longer
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and
and longer and longer and longer and longer and longer and longer and longer and

## Here is another subheader
but this one also has a link to the [google](www.google.com). I want another one
to take me [home](/)

yes
`

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { md }
  }

  onChange = e => {
    this.setState({ md: e.target.value })
  }

  render() {
    console.log(markdownRenderer.processSync(this.state.md))
    console.log(
      <div>
        hello world <div>yes sir</div>
      </div>
    )
    return (
      <div>
        <textarea value={this.state.md} onChange={this.onChange} />
        <div id="preview">
          {markdownRenderer.processSync(this.state.md).contents}
        </div>
      </div>
    )
  }
}
