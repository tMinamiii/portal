import 'github-markdown-css/github-markdown-light.css'
import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import { NormalComponents } from 'react-markdown/lib/complex-types'
import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import gfm from 'remark-gfm'
import Border from './atoms/Border'

type Props = {
  children: string
  components?: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> | undefined
}

const MdArticle: React.FC<Props> = ({ children, components }: Props): ReactElement => {
  return (
    <Border
      element={
        <div className="markdown-body">
          <ReactMarkdown className="list-mark" remarkPlugins={[gfm]} components={components}>
            {children}
          </ReactMarkdown>
        </div>
      }
    />
  )
}
export default MdArticle
