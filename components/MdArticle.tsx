import 'github-markdown-css'
import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Border from '../components/Border'

type Props = {
  content: string
  renderers?: any
}

const MdArticle: React.FC<Props> = ({ renderers, content }: Props): ReactElement => {
  return (
    <Border
      element={
        <div className="markdown-body">
          <ReactMarkdown className="list-mark" plugins={[gfm]} renderers={renderers}>
            {content}
          </ReactMarkdown>
        </div>
      }
    />
  )
}
export default MdArticle
